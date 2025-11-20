// Graph data structure - Campus Building Navigation
const rooms = [
    // Ground Floor (0-11)
    { id: 0, name: "Gate 1", floor: 0 },
    { id: 1, name: "Gate 2", floor: 0 },
    { id: 2, name: "Gate 3", floor: 0 },
    { id: 3, name: "Ubuntu Lab (GF)", floor: 0 },
    { id: 4, name: "Open Ground", floor: 0 },
    { id: 5, name: "Sports Arena", floor: 0 },
    { id: 6, name: "Leftmost Stair (GF)", floor: 0 },
    { id: 7, name: "Middle Stairs (GF)", floor: 0 },
    { id: 8, name: "Elevator (GF)", floor: 0 },
    { id: 9, name: "Meeting Hall", floor: 0 },
    { id: 10, name: "Open Audi", floor: 0 },
    { id: 11, name: "Rightmost Stair (GF)", floor: 0 },
    { id: 12, name: "Admission Cell", floor: 0 },
    { id: 13, name: "Library", floor: 0 },
    
    // First Floor (14-22)
    { id: 14, name: "Lab 1", floor: 1 },
    { id: 15, name: "Lab 10 (1F)", floor: 1 },
    { id: 16, name: "Leftmost Stair (1F)", floor: 1 },
    { id: 17, name: "Middle Stairs (1F)", floor: 1 },
    { id: 18, name: "Elevator (1F)", floor: 1 },
    { id: 19, name: "LT201", floor: 1 },
    { id: 20, name: "LT202", floor: 1 },
    { id: 21, name: "TCL1", floor: 1 },
    { id: 22, name: "Rightmost Stair (1F)", floor: 1 },
    
    // Second Floor (23-31)
    { id: 23, name: "Lab 3", floor: 2 },
    { id: 24, name: "Lab 8 (2F)", floor: 2 },
    { id: 25, name: "Lab 9", floor: 2 },
    { id: 26, name: "Leftmost Stair (2F)", floor: 2 },
    { id: 27, name: "Middle Stairs (2F)", floor: 2 },
    { id: 28, name: "Elevator (2F)", floor: 2 },
    { id: 29, name: "LT301", floor: 2 },
    { id: 30, name: "LT302", floor: 2 },
    { id: 31, name: "TCL2", floor: 2 },
    { id: 32, name: "Rightmost Stair (2F)", floor: 2 },
    
    // Third Floor (33-41)
    { id: 33, name: "Lab 4", floor: 3 },
    { id: 34, name: "Lab 8 (3F)", floor: 3 },
    { id: 35, name: "Leftmost Stair (3F)", floor: 3 },
    { id: 36, name: "Middle Stairs (3F)", floor: 3 },
    { id: 37, name: "Elevator (3F)", floor: 3 },
    { id: 38, name: "LT401", floor: 3 },
    { id: 39, name: "LT402", floor: 3 },
    { id: 40, name: "TCL3", floor: 3 },
    { id: 41, name: "Rightmost Stair (3F)", floor: 3 }
];

// Initialize adjacency matrix (42x42 for 42 nodes)
const graph = Array(42).fill(0).map(() => Array(42).fill(0));

// Helper function to add bidirectional edge
function addEdge(from, to, weight) {
    graph[from][to] = weight;
    graph[to][from] = weight;
}

// GROUND FLOOR CONNECTIONS
addEdge(0, 6, 3);      // Gate 1 to Leftmost Stair
addEdge(0, 1, 3);      // Gate 1 to Gate 2
addEdge(0, 3, 2.5);    // Gate 1 to Ubuntu Lab
addEdge(1, 3, 2.5);    // Gate 2 to Ubuntu Lab
addEdge(1, 4, 2);      // Gate 2 to Open Ground
addEdge(1, 5, 1);      // Gate 2 to Sports Arena
addEdge(1, 2, 2);      // Gate 2 to Gate 3
addEdge(6, 14, 1.5);   // Leftmost Stair to Lab 1
addEdge(6, 15, 1.5);   // Leftmost Stair to Lab 10
addEdge(14, 7, 1);     // Lab 1 to Middle Stairs
addEdge(14, 8, 1);     // Lab 1 to Elevator
addEdge(15, 7, 1);     // Lab 10 to Middle Stairs
addEdge(15, 8, 1);     // Lab 10 to Elevator
addEdge(8, 15, 1);     // Elevator to Lab 10
addEdge(8, 9, 1);      // Elevator to Meeting Hall
addEdge(7, 15, 1.5);   // Middle Stairs to Lab 10
addEdge(7, 9, 1.5);    // Middle Stairs to Meeting Hall
addEdge(9, 3, 1.5);    // Meeting Hall to Ubuntu Lab
addEdge(9, 11, 1.5);   // Meeting Hall to Rightmost Stair
addEdge(9, 10, 1);     // Meeting Hall to Open Audi
addEdge(10, 3, 0.5);   // Open Audi to Ubuntu Lab
addEdge(10, 11, 0.5);  // Open Audi to Rightmost Stair
addEdge(11, 12, 0.5);  // Rightmost Stair to Admission Cell
addEdge(11, 13, 0.5);  // Rightmost Stair to Library
addEdge(11, 3, 0.5);   // Rightmost Stair to Ubuntu Lab

// FIRST FLOOR CONNECTIONS
addEdge(16, 14, 1.5);  // Leftmost Stair to Lab 1
addEdge(16, 15, 1.5);  // Leftmost Stair to Lab 10
addEdge(14, 17, 1);    // Lab 1 to Middle Stairs
addEdge(14, 18, 1);    // Lab 1 to Elevator
addEdge(15, 17, 1);    // Lab 10 to Middle Stairs
addEdge(15, 18, 1);    // Lab 10 to Elevator
addEdge(18, 15, 1);    // Elevator to Lab 10
addEdge(18, 19, 1);    // Elevator to LT201
addEdge(18, 20, 1);    // Elevator to LT202
addEdge(17, 25, 1.5);  // Middle Stairs to Lab 9
addEdge(17, 19, 1.5);  // Middle Stairs to LT201
addEdge(17, 20, 1.5);  // Middle Stairs to LT202
addEdge(19, 3, 1.5);   // LT201 to Ubuntu Lab
addEdge(19, 22, 1.5);  // LT201 to Rightmost Stair
addEdge(19, 21, 0.5);  // LT201 to TCL1
addEdge(20, 19, 1.5);  // LT202 to LT201
addEdge(20, 3, 1.5);   // LT202 to Ubuntu Lab
addEdge(20, 22, 1.5);  // LT202 to Rightmost Stair
addEdge(20, 21, 0.5);  // LT202 to TCL1
addEdge(22, 21, 0.5);  // Rightmost Stair to TCL1

// SECOND FLOOR CONNECTIONS
addEdge(26, 23, 1.5);  // Leftmost Stair to Lab 3
addEdge(26, 24, 1.5);  // Leftmost Stair to Lab 8
addEdge(23, 27, 1);    // Lab 3 to Middle Stairs
addEdge(23, 28, 1);    // Lab 3 to Elevator
addEdge(24, 27, 1);    // Lab 8 to Middle Stairs
addEdge(24, 28, 1);    // Lab 8 to Elevator
addEdge(28, 25, 1);    // Elevator to Lab 9
addEdge(28, 29, 1);    // Elevator to LT301
addEdge(28, 30, 1);    // Elevator to LT302
addEdge(27, 25, 1.5);  // Middle Stairs to Lab 9
addEdge(27, 29, 1.5);  // Middle Stairs to LT301
addEdge(27, 30, 1.5);  // Middle Stairs to LT302
addEdge(29, 3, 1.5);   // LT301 to Ubuntu Lab
addEdge(29, 32, 1.5);  // LT301 to Rightmost Stair
addEdge(29, 31, 0.5);  // LT301 to TCL2
addEdge(30, 29, 1.5);  // LT302 to LT301
addEdge(30, 3, 1.5);   // LT302 to Ubuntu Lab
addEdge(30, 32, 1.5);  // LT302 to Rightmost Stair
addEdge(30, 31, 0.5);  // LT302 to TCL2
addEdge(32, 31, 0.5);  // Rightmost Stair to TCL2

// THIRD FLOOR CONNECTIONS
addEdge(35, 33, 1.5);  // Leftmost Stair to Lab 4
addEdge(35, 34, 1.5);  // Leftmost Stair to Lab 8
addEdge(33, 36, 1);    // Lab 4 to Middle Stairs
addEdge(33, 37, 1);    // Lab 4 to Elevator
addEdge(34, 36, 1);    // Lab 8 to Middle Stairs
addEdge(34, 37, 1);    // Lab 8 to Elevator
addEdge(37, 34, 1);    // Elevator to Lab 8
addEdge(37, 38, 1);    // Elevator to LT401
addEdge(37, 39, 1);    // Elevator to LT402
addEdge(36, 34, 1.5);  // Middle Stairs to Lab 8
addEdge(36, 38, 1.5);  // Middle Stairs to LT401
addEdge(36, 39, 1.5);  // Middle Stairs to LT402
addEdge(38, 3, 1.5);   // LT401 to Ubuntu Lab
addEdge(38, 41, 1.5);  // LT401 to Rightmost Stair
addEdge(38, 40, 0.5);  // LT401 to TCL3
addEdge(39, 38, 1.5);  // LT402 to LT401
addEdge(39, 3, 1.5);   // LT402 to Ubuntu Lab
addEdge(39, 41, 1.5);  // LT402 to Rightmost Stair
addEdge(39, 40, 0.5);  // LT402 to TCL3
addEdge(41, 40, 0.5);  // Rightmost Stair to TCL3

// VERTICAL CONNECTIONS (Stairs and Elevator between floors)
// Leftmost Stairs
addEdge(6, 16, 1);     // GF to 1F
addEdge(16, 26, 1);    // 1F to 2F
addEdge(26, 35, 1);    // 2F to 3F

// Middle Stairs
addEdge(7, 17, 1);     // GF to 1F
addEdge(17, 27, 1);    // 1F to 2F
addEdge(27, 36, 1);    // 2F to 3F

// Elevator
addEdge(8, 18, 0.5);   // GF to 1F
addEdge(18, 28, 0.5);  // 1F to 2F
addEdge(28, 37, 0.5);  // 2F to 3F

// Rightmost Stairs
addEdge(11, 22, 1);    // GF to 1F
addEdge(22, 32, 1);    // 1F to 2F
addEdge(32, 41, 1);    // 2F to 3F

// API Configuration
const API_URL = 'http://localhost:3000/api';

// User data
let currentUser = null;
let selectedStart = null;
let selectedEnd = null;

// Authentication Functions
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
}

function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.add('active');
}

async function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const messageEl = document.getElementById('login-message');

    if (!email || !password) {
        messageEl.textContent = 'Please fill in all fields';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.success) {
            currentUser = data.user;
            messageEl.textContent = data.message;
            messageEl.style.background = 'rgba(76, 175, 80, 0.3)';
            setTimeout(() => {
                document.getElementById('auth-section').classList.add('hidden');
                document.getElementById('nav-section').classList.remove('hidden');
                messageEl.textContent = '';
            }, 1000);
        } else {
            messageEl.textContent = data.message;
            messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        }
    } catch (error) {
        console.error('Login error:', error);
        messageEl.textContent = 'Connection error. Make sure the server is running.';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
    }
}

async function register() {
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const messageEl = document.getElementById('register-message');

    if (!email || !password || !confirm) {
        messageEl.textContent = 'Please fill in all fields';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        return;
    }

    if (password !== confirm) {
        messageEl.textContent = 'Passwords do not match';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        return;
    }

    if (password.length < 6) {
        messageEl.textContent = 'Password must be at least 6 characters';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.success) {
            messageEl.textContent = data.message;
            messageEl.style.background = 'rgba(76, 175, 80, 0.3)';
            
            setTimeout(() => {
                document.getElementById('register-email').value = '';
                document.getElementById('register-password').value = '';
                document.getElementById('register-confirm').value = '';
                messageEl.textContent = '';
                showLogin();
            }, 1500);
        } else {
            messageEl.textContent = data.message;
            messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
        }
    } catch (error) {
        console.error('Registration error:', error);
        messageEl.textContent = 'Connection error. Make sure the server is running.';
        messageEl.style.background = 'rgba(244, 67, 54, 0.3)';
    }
}

function logout() {
    currentUser = null;
    selectedStart = null;
    selectedEnd = null;
    document.getElementById('nav-section').classList.add('hidden');
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-message').textContent = '';
    clearSelection();
}

// Selection mode
let selectionMode = 'start'; // 'start' or 'end'
let currentFloorFilter = 0;

function setSelectionMode(mode) {
    selectionMode = mode;
    document.getElementById('select-start-btn').classList.remove('active');
    document.getElementById('select-end-btn').classList.remove('active');
    
    if (mode === 'start') {
        document.getElementById('select-start-btn').classList.add('active');
    } else {
        document.getElementById('select-end-btn').classList.add('active');
    }
}

// Room icons mapping
const roomIcons = {
    'Gate': '🚪',
    'Lab': '💻',
    'Ubuntu': '🐧',
    'Library': '📚',
    'Ground': '🏃',
    'Sports': '⚽',
    'Stair': '🪜',
    'Elevator': '🛗',
    'Meeting': '👥',
    'Audi': '🎭',
    'Admission': '📝',
    'LT': '🎓',
    'TCL': '🖥️'
};

function getRoomIcon(roomName) {
    for (let key in roomIcons) {
        if (roomName.includes(key)) {
            return roomIcons[key];
        }
    }
    return '📍';
}

function showFloor(floor) {
    currentFloorFilter = floor;
    
    // Update tab styling
    const tabs = document.querySelectorAll('.floor-tab');
    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if ((floor === -1 && index === 4) || (floor >= 0 && index === floor)) {
            tab.classList.add('active');
        }
    });
    
    renderRooms();
}

function filterRooms() {
    const searchTerm = document.getElementById('room-search').value.toLowerCase();
    const cards = document.querySelectorAll('.room-card');
    
    cards.forEach(card => {
        const roomName = card.querySelector('h3').textContent.toLowerCase();
        if (roomName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function renderRooms() {
    const container = document.getElementById('room-grid-container');
    let html = '<div class="room-grid">';
    
    const filteredRooms = currentFloorFilter === -1 
        ? rooms 
        : rooms.filter(room => room.floor === currentFloorFilter);
    
    filteredRooms.forEach(room => {
        const icon = getRoomIcon(room.name);
        html += `
            <div class="room-card" data-room="${room.id}" onclick="selectRoom(${room.id})">
                <div class="room-icon">${icon}</div>
                <h3>${room.name}</h3>
                <p>Floor ${room.floor}</p>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Reapply selection styling
    updateSelection();
}

// Room Selection
function selectRoom(roomId) {
    if (selectionMode === 'start') {
        if (selectedStart === roomId) {
            selectedStart = null; // Deselect if clicking same room
        } else {
            selectedStart = roomId;
            // Auto-switch to destination mode after selecting start
            if (selectedEnd === null) {
                setSelectionMode('end');
            }
        }
    } else {
        if (selectedEnd === roomId) {
            selectedEnd = null; // Deselect if clicking same room
        } else {
            selectedEnd = roomId;
        }
    }
    
    updateSelection();
}

function updateSelection() {
    const cards = document.querySelectorAll('.room-card');
    cards.forEach((card, index) => {
        card.classList.remove('selected-start', 'selected-end');
        if (index === selectedStart) {
            card.classList.add('selected-start');
        }
        if (index === selectedEnd) {
            card.classList.add('selected-end');
        }
    });
    
    document.getElementById('start-room').textContent = 
        selectedStart !== null ? rooms[selectedStart].name : 'Not selected';
    document.getElementById('end-room').textContent = 
        selectedEnd !== null ? rooms[selectedEnd].name : 'Not selected';
}

function clearSelection() {
    selectedStart = null;
    selectedEnd = null;
    selectionMode = 'start';
    setSelectionMode('start');
    updateSelection();
    document.getElementById('results-content').innerHTML = 
        '<p class="placeholder">Select start and destination to find a route</p>';
}

// Dijkstra's Algorithm
function dijkstra(start, end) {
    const n = rooms.length;
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    const parent = new Array(n).fill(-1);
    
    dist[start] = 0;
    
    for (let count = 0; count < n - 1; count++) {
        let u = -1;
        let minDist = Infinity;
        
        for (let v = 0; v < n; v++) {
            if (!visited[v] && dist[v] < minDist) {
                minDist = dist[v];
                u = v;
            }
        }
        
        if (u === -1) break;
        visited[u] = true;
        
        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && dist[u] !== Infinity &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                parent[v] = u;
            }
        }
    }
    
    return { distance: dist[end], parent };
}

function buildPath(parent, start, end) {
    const path = [];
    for (let v = end; v !== -1; v = parent[v]) {
        path.unshift(v);
    }
    return path[0] === start ? path : [];
}

function findSecondShortest(start, end) {
    const firstResult = dijkstra(start, end);
    if (firstResult.distance === Infinity) return null;
    
    const firstPath = buildPath(firstResult.parent, start, end);
    let secondBest = Infinity;
    let secondPath = null;
    
    // Try removing each edge in the shortest path
    for (let i = 0; i < firstPath.length - 1; i++) {
        const u = firstPath[i];
        const v = firstPath[i + 1];
        
        const saved = graph[u][v];
        graph[u][v] = 0;
        graph[v][u] = 0;
        
        const altResult = dijkstra(start, end);
        
        if (altResult.distance !== Infinity && 
            altResult.distance > firstResult.distance && 
            altResult.distance < secondBest) {
            secondBest = altResult.distance;
            secondPath = buildPath(altResult.parent, start, end);
        }
        
        graph[u][v] = saved;
        graph[v][u] = saved;
    }
    
    return secondPath ? { distance: secondBest, path: secondPath } : null;
}

// Display Functions
function findShortestPath() {
    if (selectedStart === null || selectedEnd === null) {
        alert('Please select both start and destination rooms');
        return;
    }
    
    if (selectedStart === selectedEnd) {
        alert('Start and destination cannot be the same');
        return;
    }
    
    const result = dijkstra(selectedStart, selectedEnd);
    const path = buildPath(result.parent, selectedStart, selectedEnd);
    
    displayPath('Shortest Path', result.distance, path);
}

function findAlternativePath() {
    if (selectedStart === null || selectedEnd === null) {
        alert('Please select both start and destination rooms');
        return;
    }
    
    if (selectedStart === selectedEnd) {
        alert('Start and destination cannot be the same');
        return;
    }
    
    const result = findSecondShortest(selectedStart, selectedEnd);
    
    if (result) {
        displayPath('Alternative (Second Shortest) Path', result.distance, result.path);
    } else {
        document.getElementById('results-content').innerHTML = 
            '<p class="error-message">No alternative path found</p>';
    }
}

// Navigation state
let currentPath = [];
let currentStep = 0;
let isNavigating = false;

function displayPath(title, distance, path) {
    if (path.length === 0) {
        document.getElementById('results-content').innerHTML = 
            '<p class="error-message">No path found</p>';
        return;
    }
    
    currentPath = path;
    currentStep = 0;
    isNavigating = false;
    
    let html = `
        <div class="path-info">
            <div class="path-title">${title}</div>
            <div class="distance">Total Distance: ${distance} units</div>
            <div class="steps" id="path-steps">
    `;
    
    path.forEach((nodeId, index) => {
        const room = rooms[nodeId];
        if (index === 0) {
            html += `<div class="step" data-step="${index}">🚀 Start at: ${room.name} (Floor ${room.floor})</div>`;
        } else {
            html += `<div class="step" data-step="${index}">➡️ Then go to: ${room.name} (Floor ${room.floor})</div>`;
        }
    });
    
    html += `</div>
        <button onclick="startNavigation()" class="btn-primary" style="margin-top: 20px;">
            🧭 Start Interactive Navigation
        </button>
    </div>`;
    document.getElementById('results-content').innerHTML = html;
}

function startNavigation() {
    if (currentPath.length === 0) return;
    
    isNavigating = true;
    currentStep = 0;
    showNavigationPrompt();
}

function showNavigationPrompt() {
    if (currentStep >= currentPath.length) {
        showCompletionMessage();
        return;
    }
    
    const room = rooms[currentPath[currentStep]];
    const isStart = currentStep === 0;
    const isEnd = currentStep === currentPath.length - 1;
    
    let message = '';
    let icon = '';
    
    if (isStart) {
        message = `You are starting at: <strong>${room.name}</strong> (Floor ${room.floor})`;
        icon = '🚀';
    } else if (isEnd) {
        message = `Final destination: <strong>${room.name}</strong> (Floor ${room.floor})`;
        icon = '🎯';
    } else {
        message = `Next waypoint: <strong>${room.name}</strong> (Floor ${room.floor})`;
        icon = '📍';
    }
    
    const html = `
        <div class="navigation-prompt">
            <div class="nav-icon">${icon}</div>
            <div class="nav-message">${message}</div>
            <div class="nav-question">Have you reached this location?</div>
            <div class="nav-buttons">
                <button onclick="handleNavigationResponse(true)" class="nav-btn nav-yes">
                    ✅ Yes, I'm here!
                </button>
                <button onclick="handleNavigationResponse(false)" class="nav-btn nav-no">
                    ❌ Not yet
                </button>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(currentStep / (currentPath.length - 1)) * 100}%"></div>
            </div>
            <div class="progress-text">Step ${currentStep + 1} of ${currentPath.length}</div>
        </div>
    `;
    
    document.getElementById('results-content').innerHTML = html;
    
    // Highlight current step
    highlightCurrentStep();
}

function highlightCurrentStep() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.classList.remove('step-current', 'step-completed');
        if (index < currentStep) {
            step.classList.add('step-completed');
        } else if (index === currentStep) {
            step.classList.add('step-current');
        }
    });
}

function handleNavigationResponse(reached) {
    const room = rooms[currentPath[currentStep]];
    const isLastStep = currentStep === currentPath.length - 1;
    
    if (reached) {
        if (isLastStep) {
            showCompletionMessage();
        } else {
            showEncouragementMessage(room.name);
        }
    } else {
        showMotivationMessage(room.name);
    }
}

function showEncouragementMessage(currentLocation) {
    const nextRoom = rooms[currentPath[currentStep + 1]];
    const messages = [
        `Great! You've reached ${currentLocation}! 🎉`,
        `Awesome! Now head to: <strong>${nextRoom.name}</strong> (Floor ${nextRoom.floor})`,
        `Keep going! You're doing great! 💪`
    ];
    
    const html = `
        <div class="encouragement-message">
            <div class="encourage-icon">🎉</div>
            <div class="encourage-text">${messages[0]}</div>
            <div class="encourage-next">${messages[1]}</div>
            <div class="encourage-motivate">${messages[2]}</div>
            <button onclick="moveToNextStep()" class="btn-primary" style="margin-top: 20px;">
                ➡️ Continue to Next Stop
            </button>
        </div>
    `;
    
    document.getElementById('results-content').innerHTML = html;
}

function showMotivationMessage(targetLocation) {
    const motivations = [
        "Keep moving! You're almost there! 🚶‍♂️",
        "Don't give up! Keep heading towards your destination! 💪",
        "Stay on track! You can do this! 🎯",
        "Keep going! The destination is worth it! 🌟"
    ];
    
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    
    const html = `
        <div class="motivation-message">
            <div class="motivate-icon">💪</div>
            <div class="motivate-text">Keep Moving!</div>
            <div class="motivate-subtitle">${randomMotivation}</div>
            <div class="motivate-target">Target: <strong>${targetLocation}</strong></div>
            <button onclick="showNavigationPrompt()" class="btn-primary" style="margin-top: 20px;">
                🔄 Check Again
            </button>
        </div>
    `;
    
    document.getElementById('results-content').innerHTML = html;
}

function moveToNextStep() {
    currentStep++;
    showNavigationPrompt();
}

function showCompletionMessage() {
    const finalRoom = rooms[currentPath[currentPath.length - 1]];
    
    const html = `
        <div class="completion-message">
            <div class="complete-icon">🎊</div>
            <div class="complete-title">Congratulations!</div>
            <div class="complete-text">You've successfully reached your destination!</div>
            <div class="complete-location">📍 ${finalRoom.name} (Floor ${finalRoom.floor})</div>
            <div class="complete-stats">
                <div class="stat">✅ Steps Completed: ${currentPath.length}</div>
                <div class="stat">🎯 Navigation Success!</div>
            </div>
            <button onclick="clearSelection()" class="btn-primary" style="margin-top: 20px;">
                🔄 Start New Navigation
            </button>
        </div>
    `;
    
    document.getElementById('results-content').innerHTML = html;
    isNavigating = false;
}

function showGraph() {
    let html = '<div class="graph-connections"><div class="path-title">Graph Connections</div>';
    
    rooms.forEach((room, i) => {
        html += `<div class="graph-node"><strong>${room.name}</strong>`;
        const connections = [];
        graph[i].forEach((dist, j) => {
            if (dist > 0) {
                connections.push(`${rooms[j].name} (${dist} units)`);
            }
        });
        html += connections.length > 0 ? connections.join(', ') : 'No connections';
        html += '</div>';
    });
    
    html += '</div>';
    document.getElementById('results-content').innerHTML = html;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showLogin();
    console.log('Campus Navigation System initialized');
    console.log('API URL:', API_URL);
    console.log('Total rooms:', rooms.length);
    
    // Render initial rooms when navigation section is shown
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'nav-section' && !mutation.target.classList.contains('hidden')) {
                renderRooms();
            }
        });
    });
    
    const navSection = document.getElementById('nav-section');
    if (navSection) {
        observer.observe(navSection, { attributes: true, attributeFilter: ['class'] });
    }
});
