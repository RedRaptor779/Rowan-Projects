$(document).ready(function() {
	const params = new URLSearchParams(window.location.search);
	const query = (params.get("q") || "").trim();

	// Set report metadata
	const now = new Date();
	const dateStr = now.toLocaleDateString('en-US', { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric' 
	});
	const timeStr = now.toLocaleTimeString('en-US', { 
		hour: '2-digit', 
		minute: '2-digit', 
		second: '2-digit'
	});

	$("#reportDate").text(dateStr);
	$("#reportQuery").text(query || "Not specified");
	$("#reportTime").text(`Report Time: ${timeStr}`);

	if (!query) {
		$("#loadingIndicator").html(
			'<div style="padding: 20px; text-align: center; color: #8f8f8f;">' +
			'No search query provided.' +
			'</div>'
		);
		return;
	}

	// Fetch findings from PHP API
	$.ajax({
		url: 'api.php',
		method: 'GET',
		data: { q: query },
		dataType: 'json',
		timeout: 15000,
		success: function(response) {
			if (response.success && response.findings.length > 0) {
				displayFindings(response);
			} else {
				displayError('No findings retrieved. Please try again.');
			}
		},
		error: function(xhr, status, error) {
			console.error('Error fetching findings:', error);
			displayError('Error fetching intelligence: ' + error);
		}
	});

	/**
	 * Display findings from API response
	 */
	function displayFindings(response) {
		const findings = response.findings;
		const $resultsList = $("#resultsList");
		$resultsList.empty();

		// Update summary counters
		$("#criticalCount").text(response.severity_counts.critical);
		$("#highCount").text(response.severity_counts.high);
		$("#mediumCount").text(response.severity_counts.medium);
		$("#infoCount").text(findings.length);

		// Hide loading and show content
		$("#loadingIndicator").hide();
		$("#riskSummary").show();
		$("#findingsSection").show();

		// Build finding cards
		findings.forEach((finding, index) => {
			const findingCard = createFindingCard(finding);
			$resultsList.append(findingCard);
		});
	}

	/**
	 * Create a finding card element
	 */
	function createFindingCard(finding) {
		const severity = finding.severity || 'info';
		const icon = finding.icon || '📊';
		const name = escapeHtml(finding.name || 'Unknown Source');
		const category = escapeHtml(finding.category || 'General');
		const description = escapeHtml(finding.description || '');
		const sourceType = escapeHtml(finding.source_type || 'Unknown');
		const actionUrl = finding.action_url || finding.url || '#';
		const url = finding.url || '#';

		// Build detail items from data
		let detailsHtml = `
			<div class="detail-group">
				<div class="detail-label">Source Type</div>
				<div class="detail-value">${sourceType}</div>
			</div>
			<div class="detail-group">
				<div class="detail-label">Intelligence Description</div>
				<div class="detail-value">${description}</div>
			</div>
		`;

		// Add data fields if available
		if (finding.data && typeof finding.data === 'object') {
			for (const [key, value] of Object.entries(finding.data)) {
				if (value && typeof value !== 'object') {
					const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
					let displayValue = value;
					
					// Format URLs as links
					if (typeof value === 'string' && value.startsWith('http')) {
						displayValue = `<a href="${escapeHtml(value)}" target="_blank" rel="noopener noreferrer">${escapeHtml(value.substring(0, 50))}...</a>`;
					} else {
						displayValue = escapeHtml(String(value));
					}
					
					detailsHtml += `
						<div class="detail-group">
							<div class="detail-label">${escapeHtml(label)}</div>
							<div class="detail-value">${displayValue}</div>
						</div>
					`;
				}
			}
		}

		// Add severity assessment
		detailsHtml += `
			<div class="detail-group">
				<div class="detail-label">Severity Assessment</div>
				<div class="detail-value">This source has a ${severity.toUpperCase()} severity rating due to the potential sensitivity and relevance of publicly available information.</div>
			</div>
		`;

		const card = $(`
			<div class="finding-card severity-${severity}">
				<div class="finding-header">
					<div class="finding-title-wrapper">
						<h3 class="finding-title">
							<span style="margin-right: 8px;">${icon}</span>${name}
						</h3>
						<div class="finding-category">${category}</div>
					</div>
					<div class="finding-controls">
						<span class="severity-badge ${severity}">${severity.toUpperCase()}</span>
						<button class="toggle-btn" aria-expanded="false">⌄</button>
					</div>
				</div>
				<div class="finding-content">
					<div class="finding-details">
						${detailsHtml}
						<a href="${escapeHtml(actionUrl)}" target="_blank" rel="noopener noreferrer" class="source-link">
							Access Intelligence Source →
						</a>
					</div>
				</div>
			</div>
		`);

		return card;
	}

	/**
	 * Display error message
	 */
	function displayError(message) {
		$("#loadingIndicator").html(
			'<div style="padding: 40px; text-align: center; color: #ff6b6b;">' +
			'<p style="font-size: 1.2rem; margin-bottom: 12px;">⚠ Error</p>' +
			'<p>' + escapeHtml(message) + '</p>' +
			'<p style="margin-top: 20px; font-size: 0.9rem; color: #999;">' +
			'<a href="index.php" style="color: #4da3ff;">← Back to Search</a>' +
			'</p>' +
			'</div>'
		);
	}

	/**
	 * Escape HTML to prevent XSS
	 */
	function escapeHtml(text) {
		const map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};
		return String(text).replace(/[&<>"']/g, m => map[m]);
	}

	// Toggle card expansion with jQuery
	$(document).on('click', '.finding-header', function() {
		const $card = $(this).closest('.finding-card');
		const $content = $card.find('.finding-content');
		const $btn = $(this).find('.toggle-btn');
		
		$content.toggleClass('expanded');
		$btn.toggleClass('expanded');
		$btn.attr('aria-expanded', $btn.hasClass('expanded'));
	});

	// Expand All / Collapse All functionality
	$(document).on('click', '#toggleAll', function() {
		const isExpanded = $(".finding-content").first().hasClass('expanded');
		
		if (isExpanded) {
			$(".finding-content").removeClass('expanded');
			$(".toggle-btn").removeClass('expanded').attr('aria-expanded', 'false');
			$(this).text('Expand All');
		} else {
			$(".finding-content").addClass('expanded');
			$(".toggle-btn").addClass('expanded').attr('aria-expanded', 'true');
			$(this).text('Collapse All');
		}
	});

	// Print functionality
	$(document).on('click', '#printReport', function() {
		// Expand all sections before printing
		$(".finding-content").addClass('expanded');
		
		setTimeout(function() {
			window.print();
			// Collapse again after printing
			$(".finding-content").removeClass('expanded');
		}, 500);
	});
});