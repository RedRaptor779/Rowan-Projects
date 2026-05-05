<?php
/**
 * OSINT Intelligence API
 * Fetches real data from accessible sources using PHP/cURL
 */

header('Content-Type: application/json');

$query = isset($_GET['q']) ? trim($_GET['q']) : '';

if (!$query) {
    echo json_encode([
        'success' => false,
        'error' => 'No search query provided',
        'findings' => []
    ]);
    exit;
}

// Disable SSL verification for local testing (not recommended for production)
$ssl_verify = false;

/**
 * Fetch findings from various sources
 */
$findings = [];

// 1. GitHub Search - Free API, no authentication required for basic queries
$findings[] = fetchGitHub($query, $ssl_verify);

// 2. Stack Overflow - Free API
$findings[] = fetchStackOverflow($query, $ssl_verify);

// 3. YouTube - Basic search simulation with metadata
$findings[] = createYouTubeFinding($query);

// 4. DuckDuckGo - Privacy-focused search (simulated)
$findings[] = createDuckDuckGoFinding($query);

// 5. Public records simulation
$findings[] = createPublicRecordsFinding($query);

// 6. LinkedIn simulation (can't actually scrape, but can show what would be found)
$findings[] = createLinkedInFinding($query);

// 7. GitHub User Search
$findings[] = fetchGitHubUsers($query, $ssl_verify);

// 8. Twitter simulation
$findings[] = createTwitterFinding($query);

// Filter out null findings and reindex
$findings = array_filter($findings, function($f) { return $f !== null; });
$findings = array_values($findings);

// Count by severity
$severity_counts = [
    'critical' => 0,
    'high' => 0,
    'medium' => 0,
    'info' => 0
];

foreach ($findings as $finding) {
    $severity = $finding['severity'] ?? 'info';
    if (isset($severity_counts[$severity])) {
        $severity_counts[$severity]++;
    }
}

echo json_encode([
    'success' => true,
    'query' => $query,
    'timestamp' => date('c'),
    'severity_counts' => $severity_counts,
    'findings' => $findings
]);

/**
 * Fetch GitHub repositories and user data
 */
function fetchGitHub($query, $ssl_verify) {
    $url = "https://api.github.com/search/repositories?q=" . urlencode($query) . "&sort=stars&per_page=5";
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $ssl_verify);
    curl_setopt($ch, CURLOPT_USERAGENT, 'InfoAudit/1.0');
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code !== 200) {
        return null;
    }
    
    $data = json_decode($response, true);
    
    if (!isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $repo_count = count($data['items']);
    $top_repo = $data['items'][0];
    
    return [
        'name' => 'GitHub Repository Search',
        'category' => 'Code & Development',
        'severity' => 'high',
        'description' => 'Public code repositories containing mentions of the target',
        'icon' => '💻',
        'source_type' => 'API',
        'data' => [
            'repositories_found' => $repo_count,
            'top_match' => $top_repo['name'] ?? 'N/A',
            'top_match_url' => $top_repo['html_url'] ?? '#',
            'top_match_stars' => $top_repo['stargazers_count'] ?? 0,
            'top_match_language' => $top_repo['language'] ?? 'Unknown',
            'description' => 'Found ' . $repo_count . ' repositories. Top result: ' . ($top_repo['name'] ?? 'N/A') . ' with ' . ($top_repo['stargazers_count'] ?? 0) . ' stars'
        ],
        'url' => 'https://github.com/search?q=' . urlencode($query),
        'action_url' => $top_repo['html_url'] ?? 'https://github.com/search?q=' . urlencode($query)
    ];
}

/**
 * Fetch GitHub user profiles
 */
function fetchGitHubUsers($query, $ssl_verify) {
    $url = "https://api.github.com/search/users?q=" . urlencode($query) . "&per_page=5";
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $ssl_verify);
    curl_setopt($ch, CURLOPT_USERAGENT, 'InfoAudit/1.0');
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code !== 200) {
        return null;
    }
    
    $data = json_decode($response, true);
    
    if (!isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $user_count = count($data['items']);
    $top_user = $data['items'][0];
    
    return [
        'name' => 'GitHub User Profiles',
        'category' => 'Developer Profiles',
        'severity' => 'critical',
        'description' => 'Public developer profiles and contribution history',
        'icon' => '👨‍💻',
        'source_type' => 'API',
        'data' => [
            'users_found' => $user_count,
            'top_user' => $top_user['login'] ?? 'N/A',
            'top_user_profile' => $top_user['html_url'] ?? '#',
            'top_user_repos' => $top_user['public_repos'] ?? 0,
            'top_user_followers' => $top_user['followers'] ?? 0,
            'description' => 'Found ' . $user_count . ' GitHub users. Top result: ' . ($top_user['login'] ?? 'N/A')
        ],
        'url' => 'https://github.com/search?q=' . urlencode($query) . '&type=users',
        'action_url' => $top_user['html_url'] ?? '#'
    ];
}

/**
 * Fetch Stack Overflow data
 */
function fetchStackOverflow($query, $ssl_verify) {
    $url = "https://api.stackexchange.com/2.3/search?intitle=" . urlencode($query) . "&site=stackoverflow&order=desc&sort=relevance";
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $ssl_verify);
    curl_setopt($ch, CURLOPT_USERAGENT, 'InfoAudit/1.0');
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code !== 200) {
        return null;
    }
    
    $data = json_decode($response, true);
    
    if (!isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $question_count = count($data['items']);
    $top_question = $data['items'][0];
    
    return [
        'name' => 'Stack Overflow Questions',
        'category' => 'Technical Q&A',
        'severity' => 'medium',
        'description' => 'Public questions and technical discussions mentioning the subject',
        'icon' => '❓',
        'source_type' => 'API',
        'data' => [
            'questions_found' => $question_count,
            'top_question' => $top_question['title'] ?? 'N/A',
            'top_question_url' => $top_question['link'] ?? '#',
            'top_question_score' => $top_question['score'] ?? 0,
            'top_question_answers' => $top_question['answer_count'] ?? 0,
            'description' => 'Found ' . $question_count . ' Stack Overflow questions. Top: ' . substr($top_question['title'] ?? '', 0, 60) . '...'
        ],
        'url' => 'https://stackoverflow.com/search?q=' . urlencode($query),
        'action_url' => $top_question['link'] ?? '#'
    ];
}

/**
 * Create simulated YouTube finding
 */
function createYouTubeFinding($query) {
    return [
        'name' => 'YouTube Videos',
        'category' => 'Video Content',
        'severity' => 'medium',
        'description' => 'Public videos mentioning the subject',
        'icon' => '📹',
        'source_type' => 'Simulated',
        'data' => [
            'description' => 'YouTube search would return videos containing: ' . htmlspecialchars($query) . '. This includes channel information, upload history, comments, and metadata.'
        ],
        'url' => 'https://www.youtube.com/results?search_query=' . urlencode($query),
        'action_url' => 'https://www.youtube.com/results?search_query=' . urlencode($query)
    ];
}

/**
 * Create simulated DuckDuckGo finding
 */
function createDuckDuckGoFinding($query) {
    return [
        'name' => 'DuckDuckGo Search',
        'category' => 'Public Search Engines',
        'severity' => 'high',
        'description' => 'Privacy-focused web search results',
        'icon' => '🔍',
        'source_type' => 'Simulated',
        'data' => [
            'description' => 'DuckDuckGo provides comprehensive web search without tracking. Results would include cached versions of public pages.'
        ],
        'url' => 'https://duckduckgo.com/?q=' . urlencode($query),
        'action_url' => 'https://duckduckgo.com/?q=' . urlencode($query)
    ];
}

/**
 * Create simulated public records finding
 */
function createPublicRecordsFinding($query) {
    return [
        'name' => 'Public Records',
        'category' => 'Government & Legal',
        'severity' => 'critical',
        'description' => 'Government databases, legal records, property information',
        'icon' => '📋',
        'source_type' => 'Simulated',
        'data' => [
            'description' => 'Public records would typically include property records, court filings, business registrations, and government databases. Access varies by jurisdiction.'
        ],
        'url' => 'https://www.google.com/search?q=' . urlencode($query . ' public records'),
        'action_url' => '#'
    ];
}

/**
 * Create simulated LinkedIn finding
 */
function createLinkedInFinding($query) {
    return [
        'name' => 'LinkedIn Professional Network',
        'category' => 'Social Media & Professional',
        'severity' => 'critical',
        'description' => 'Professional profiles, employment history, connections and skills',
        'icon' => '👔',
        'source_type' => 'Simulated',
        'data' => [
            'description' => 'LinkedIn profiles contain: employment history, education, skills endorsements, connections network, publications, and recommendations. All publicly indexed on search engines.'
        ],
        'url' => 'https://www.google.com/search?q=site:linkedin.com+' . urlencode($query),
        'action_url' => '#'
    ];
}

/**
 * Create simulated Twitter finding
 */
function createTwitterFinding($query) {
    return [
        'name' => 'Twitter/X Posts',
        'category' => 'Social Media',
        'severity' => 'high',
        'description' => 'Public tweets, user activity, interests, and associations',
        'icon' => '🐦',
        'source_type' => 'Simulated',
        'data' => [
            'description' => 'Twitter/X posts are publicly searchable and indexed. Contains real-time activity, interests, political views, location check-ins, and social connections.'
        ],
        'url' => 'https://www.google.com/search?q=site:twitter.com+' . urlencode($query),
        'action_url' => '#'
    ];
}

?>
