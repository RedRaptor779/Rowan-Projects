<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OSINT Vulnerability Report - InfoAudit</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="report-container">
        <!-- Report Header -->
        <header class="report-header">
            <div class="header-content">
                <img id="siteLogo" src="logo.png" alt="InfoAudit logo">
                <h1>InfoAudit</h1>
                <p class="report-subtitle">OSINT Vulnerability Intelligence Report</p>
            </div>
            <div class="report-meta">
                <p><strong>Report Generated:</strong> <span id="reportDate"></span></p>
                <p><strong>Query:</strong> <span id="reportQuery"></span></p>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="report-nav">
            <a href="index.php" class="nav-link">← Back to Search</a>
            <button id="toggleAll" class="nav-link action-btn">Expand All</button>
            <button id="printReport" class="nav-link action-btn">Print Report</button>
        </nav>

        <!-- Loading Indicator -->
        <div id="loadingIndicator" style="text-align: center; padding: 40px; color: #4da3ff;">
            <p>Loading intelligence data...</p>
            <div style="animation: spin 2s linear infinite; display: inline-block; font-size: 2rem;">⟳</div>
        </div>

        <!-- Risk Summary -->
        <section id="riskSummary" class="risk-summary" style="display: none;">
            <h2>Intelligence Summary</h2>
            <div class="summary-grid">
                <div class="summary-card critical">
                    <div class="summary-number" id="criticalCount">0</div>
                    <div class="summary-label">Critical Findings</div>
                </div>
                <div class="summary-card high">
                    <div class="summary-number" id="highCount">0</div>
                    <div class="summary-label">High Priority</div>
                </div>
                <div class="summary-card medium">
                    <div class="summary-number" id="mediumCount">0</div>
                    <div class="summary-label">Medium Priority</div>
                </div>
                <div class="summary-card info">
                    <div class="summary-number" id="infoCount">0</div>
                    <div class="summary-label">Information Sources</div>
                </div>
            </div>
        </section>

        <!-- Findings Section -->
        <section id="findingsSection" class="findings-section" style="display: none;">
            <h2>Vulnerability Findings</h2>
            <div id="resultsList" class="results-list"></div>
        </section>

        <!-- Footer -->
        <footer class="report-footer">
            <p>This report contains intelligence gathered from publicly available sources. For investigative purposes only.</p>
            <p id="reportTime"></p>
        </footer>
    </div>

    <style>
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>

    <script src="results-script.js"></script>
</body>
</html>