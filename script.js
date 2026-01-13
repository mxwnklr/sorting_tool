// --- Static HTML Code Snippets ---
const HTML_SNIPPETS = {
    insertion: `
<div class="code-line" id="line-0"><span class="line-num">1</span><span class="line-content"><span class="token-keyword">void</span> <span class="token-fn">insertionSort</span>(<span class="token-keyword">int</span> A[], <span class="token-keyword">int</span> n) {</span></div>
<div class="code-line" id="line-1"><span class="line-num">2</span><span class="line-content">    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-num">1</span>; i < n; i++) {</span></div>
<div class="code-line" id="line-2"><span class="line-num">3</span><span class="line-content">        <span class="token-keyword">int</span> key = A[i];</span></div>
<div class="code-line" id="line-3"><span class="line-num">4</span><span class="line-content">        <span class="token-keyword">int</span> j = i - <span class="token-num">1</span>;</span></div>
<div class="code-line" id="line-4"><span class="line-num">5</span><span class="line-content">        <span class="token-comment">// Move elements greater than key</span></span></div>
<div class="code-line" id="line-5"><span class="line-num">6</span><span class="line-content">        <span class="token-keyword">while</span> (j >= <span class="token-num">0</span> && A[j] > key) {</span></div>
<div class="code-line" id="line-6"><span class="line-num">7</span><span class="line-content">            A[j + <span class="token-num">1</span>] = A[j];</span></div>
<div class="code-line" id="line-7"><span class="line-num">8</span><span class="line-content">            j = j - <span class="token-num">1</span>;</span></div>
<div class="code-line" id="line-8"><span class="line-num">9</span><span class="line-content">        }</span></div>
<div class="code-line" id="line-9"><span class="line-num">10</span><span class="line-content">        A[j + <span class="token-num">1</span>] = key;</span></div>
<div class="code-line" id="line-10"><span class="line-num">11</span><span class="line-content">    }</span></div>
<div class="code-line" id="line-11"><span class="line-num">12</span><span class="line-content">}</span></div>
    `,
    selection: `
<div class="code-line" id="line-0"><span class="line-num">1</span><span class="line-content"><span class="token-keyword">void</span> <span class="token-fn">selectionSort</span>(<span class="token-keyword">int</span> A[], <span class="token-keyword">int</span> n) {</span></div>
<div class="code-line" id="line-1"><span class="line-num">2</span><span class="line-content">    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> j = <span class="token-num">0</span>; j < n - <span class="token-num">1</span>; j++) {</span></div>
<div class="code-line" id="line-2"><span class="line-num">3</span><span class="line-content">        <span class="token-keyword">int</span> min_idx = j;</span></div>
<div class="code-line" id="line-3"><span class="line-num">4</span><span class="line-content">        <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = j + <span class="token-num">1</span>; i < n; i++) {</span></div>
<div class="code-line" id="line-4"><span class="line-num">5</span><span class="line-content">            <span class="token-keyword">if</span> (A[i] < A[min_idx])</span></div>
<div class="code-line" id="line-5"><span class="line-num">6</span><span class="line-content">                min_idx = i;</span></div>
<div class="code-line" id="line-6"><span class="line-num">7</span><span class="line-content">        }</span></div>
<div class="code-line" id="line-7"><span class="line-num">8</span><span class="line-content">        <span class="token-keyword">if</span> (min_idx != j)</span></div>
<div class="code-line" id="line-8"><span class="line-num">9</span><span class="line-content">            <span class="token-fn">swap</span>(&A[min_idx], &A[j]);</span></div>
<div class="code-line" id="line-9"><span class="line-num">10</span><span class="line-content">    }</span></div>
<div class="code-line" id="line-10"><span class="line-num">11</span><span class="line-content">}</span></div>
    `,
    bubble: `
<div class="code-line" id="line-0"><span class="line-num">1</span><span class="line-content"><span class="token-keyword">void</span> <span class="token-fn">bubbleSort</span>(<span class="token-keyword">int</span> A[], <span class="token-keyword">int</span> n) {</span></div>
<div class="code-line" id="line-1"><span class="line-num">2</span><span class="line-content">    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> j = n - <span class="token-num">1</span>; j > <span class="token-num">0</span>; j--) {</span></div>
<div class="code-line" id="line-2"><span class="line-num">3</span><span class="line-content">        <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-num">0</span>; i < j; i++) {</span></div>
<div class="code-line" id="line-3"><span class="line-num">4</span><span class="line-content">            <span class="token-keyword">if</span> (A[i] > A[i + <span class="token-num">1</span>]) {</span></div>
<div class="code-line" id="line-4"><span class="line-num">5</span><span class="line-content">                <span class="token-fn">swap</span>(&A[i], &A[i + <span class="token-num">1</span>]);</span></div>
<div class="code-line" id="line-5"><span class="line-num">6</span><span class="line-content">            }</span></div>
<div class="code-line" id="line-6"><span class="line-num">7</span><span class="line-content">        }</span></div>
<div class="code-line" id="line-7"><span class="line-num">8</span><span class="line-content">    }</span></div>
<div class="code-line" id="line-8"><span class="line-num">9</span><span class="line-content">}</span></div>
    `
};

// --- CONSTANTS ---
const ARRAY_SIZE = 15;
const COL_DEFAULT = '#27272a';
const COL_COMPARE = '#f97316'; // orange
const COL_SWAP = '#ef4444'; // red
const COL_SORTED = '#10b981'; // green
const COL_SELECT = '#3b82f6'; // blue

// --- STATE ---
let timeline = []; // Array of frame objects
let currentFrameIndex = 0;
let isPlaying = false;
let speed = 60;
let currentAlgo = 'insertion';
let domBars = {}; // Map id -> DOM Element

// --- INIT ---
function init() {
    lucide.createIcons();
    
    // Events
    document.getElementById('algo-select').addEventListener('change', (e) => {
        currentAlgo = e.target.value;
        reset();
    });
    document.getElementById('speed-slider').addEventListener('input', (e) => speed = parseInt(e.target.value));
    
    document.getElementById('btn-play').addEventListener('click', togglePlay);
    document.getElementById('btn-reset').addEventListener('click', reset);
    document.getElementById('btn-step').addEventListener('click', stepForward);
    document.getElementById('btn-back').addEventListener('click', stepBackward);

    reset();
}

// --- LOGIC: GENERATE TIMELINE ---
function reset() {
    isPlaying = false;
    updatePlayButton();
    
    // Generate Data: Array of { id, value } to track identity for FLIP animation
    const rawData = Array.from({length: ARRAY_SIZE}, (_, i) => ({
        id: i,
        value: Math.floor(Math.random() * 80) + 10
    }));

    // Generate Timeline
    timeline = [];
    const dataCopy = JSON.parse(JSON.stringify(rawData)); // Deep copy
    
    // Choose Generator
    let generator;
    if (currentAlgo === 'insertion') generator = insertionSortGen(dataCopy);
    else if (currentAlgo === 'selection') generator = selectionSortGen(dataCopy);
    else if (currentAlgo === 'bubble') generator = bubbleSortGen(dataCopy);

    // Run Generator to completion to build timeline
    for (let frame of generator) {
        // Ensure frame captures a SNAPSHOT of the array state, not a reference
        timeline.push({
            ...frame,
            array: JSON.parse(JSON.stringify(frame.array))
        });
    }
    
    // Reset View
    currentFrameIndex = 0;
    document.getElementById('code-content').innerHTML = HTML_SNIPPETS[currentAlgo];
    
    // Create DOM elements once based on initial frame (or rawData if timeline empty?)
    if (timeline.length > 0) {
        createDomElements(timeline[0].array);
        renderFrame(0);
    }
}

function createDomElements(itemArray) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = '';
    domBars = {};
    
    const slotWidth = 100 / ARRAY_SIZE;

    // 1. Create Indices
    for (let i = 0; i < ARRAY_SIZE; i++) {
        const idx = document.createElement('div');
        idx.className = 'index-marker';
        idx.textContent = i;
        idx.style.left = `${i * slotWidth + (slotWidth * 0.5)}%`;
        canvas.appendChild(idx);
    }

    // 2. Create Bars
    itemArray.forEach(item => {
        const bar = document.createElement('div');
        bar.className = 'bar bg-zinc-800';
        bar.style.width = `${slotWidth * 0.7}%`;
        bar.style.height = `${item.value}%`;
        
        // Inner Label
        const label = document.createElement('span');
        label.className = 'bar-label';
        label.textContent = item.value;
        bar.appendChild(label);

        canvas.appendChild(bar);
        domBars[item.id] = bar;
    });
}

// --- RENDERER ---
function renderFrame(index) {
    if (index < 0 || index >= timeline.length) return;
    const frame = timeline[index];
    
    // Update Text & Code
    document.getElementById('explanation').textContent = frame.text || "";
    highlightLine(frame.line);
    
    // Update Bars
    const slotWidth = 100 / ARRAY_SIZE;
    
    // Map of ID -> Status Color
    const highlights = frame.highlights || {};

    frame.array.forEach((item, posIndex) => {
        const bar = domBars[item.id];
        if (!bar) return;

        // Position
        bar.style.left = `${posIndex * slotWidth + (slotWidth * 0.15)}%`;
        
        // Color
        let color = COL_DEFAULT;
        if (highlights[item.id]) color = highlights[item.id];
        bar.style.backgroundColor = color;
    });
}

function highlightLine(idx) {
    document.querySelectorAll('.code-line.active').forEach(el => el.classList.remove('active'));
    if (idx >= 0) {
        const line = document.getElementById(`line-${idx}`);
        if (line) {
            line.classList.add('active');
            line.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
}

// --- PLAYBACK ---
function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayButton();
    if (isPlaying) runLoop();
}

async function runLoop() {
    while (isPlaying && currentFrameIndex < timeline.length - 1) {
        currentFrameIndex++;
        renderFrame(currentFrameIndex);
        
        const delay = 1000 - (speed * 9);
        await new Promise(r => setTimeout(r, Math.max(10, delay)));
    }
    if (currentFrameIndex >= timeline.length - 1) {
        isPlaying = false;
        updatePlayButton();
    }
}

function stepForward() {
    isPlaying = false;
    updatePlayButton();
    if (currentFrameIndex < timeline.length - 1) {
        currentFrameIndex++;
        renderFrame(currentFrameIndex);
    }
}

function stepBackward() {
    isPlaying = false;
    updatePlayButton();
    if (currentFrameIndex > 0) {
        currentFrameIndex--;
        renderFrame(currentFrameIndex);
    }
}

function updatePlayButton() {
    const btn = document.getElementById('btn-play');
    if (isPlaying) {
        btn.innerHTML = '<i data-lucide="pause" class="h-3 w-3 mr-2"></i> Pause';
        document.getElementById('status-dot').className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
    } else {
        btn.innerHTML = '<i data-lucide="play" class="h-3 w-3 mr-2"></i> Play';
        document.getElementById('status-dot').className = "w-2 h-2 rounded-full bg-primary";
    }
    lucide.createIcons();
}

// --- GENERATORS (Yield Snapshots) ---
function snapshot(array, line, text, highlights = {}) {
    return { array, line, text, highlights };
}

function mapColors(idSet, color) {
    const map = {};
    idSet.forEach(id => map[id] = color);
    return map;
}

function* insertionSortGen(arr) {
    yield snapshot(arr, 1, "Starting Insertion Sort");
    
    let sortedIds = new Set([arr[0].id]);
    yield snapshot(arr, 1, "Element 0 is trivially sorted", mapColors(sortedIds, COL_SORTED));

    for (let i = 1; i < arr.length; i++) {
        let keyItem = arr[i];
        let j = i - 1;
        
        yield snapshot(arr, 2, `Selected key: ${keyItem.value}`, { ...mapColors(sortedIds, COL_SORTED), [keyItem.id]: COL_SELECT });
        
        while (j >= 0 && arr[j].value > keyItem.value) {
            yield snapshot(arr, 5, `Compare ${arr[j].value} > ${keyItem.value}? Yes.`, { 
                ...mapColors(sortedIds, COL_SORTED), 
                [keyItem.id]: COL_SELECT,
                [arr[j].id]: COL_COMPARE
            });
            
            arr[j + 1] = arr[j];
            let tempArr = [...arr];
            tempArr[j] = keyItem; // Show key moving left
            
            yield snapshot(tempArr, 6, `Shift ${arr[j].value} right.`, {
                ...mapColors(sortedIds, COL_SORTED),
                [keyItem.id]: COL_SWAP,
                [arr[j+1].id]: COL_SWAP
            });
            
            arr[j] = keyItem; 
            j = j - 1;
        }
        
        // Final insertion
        arr[j + 1] = keyItem;
        sortedIds.add(keyItem.id);
        yield snapshot(arr, 9, `Insert ${keyItem.value} at pos ${j+1}.`, mapColors(sortedIds, COL_SORTED));
    }
    yield snapshot(arr, 12, "Done!", mapColors(new Set(arr.map(i=>i.id)), COL_SORTED));
}

function* selectionSortGen(arr) {
    let sortedIds = new Set();
    for (let j = 0; j < arr.length - 1; j++) {
        let min_idx = j;
        yield snapshot(arr, 2, `Assume min at ${j} (${arr[j].value})`, { ...mapColors(sortedIds, COL_SORTED), [arr[j].id]: COL_SELECT });
        
        for (let i = j + 1; i < arr.length; i++) {
            yield snapshot(arr, 4, `Check ${arr[i].value} < ${arr[min_idx].value}?`, {
                ...mapColors(sortedIds, COL_SORTED),
                [arr[min_idx].id]: COL_SELECT,
                [arr[i].id]: COL_COMPARE
            });
            
            if (arr[i].value < arr[min_idx].value) {
                min_idx = i;
                yield snapshot(arr, 5, `New min found: ${arr[min_idx].value}`, {
                    ...mapColors(sortedIds, COL_SORTED),
                    [arr[min_idx].id]: COL_SELECT
                });
            }
        }
        
        if (min_idx !== j) {
            let temp = arr[j];
            arr[j] = arr[min_idx];
            arr[min_idx] = temp;
            yield snapshot(arr, 8, `Swap ${arr[j].value} with ${arr[min_idx].value}`, {
                ...mapColors(sortedIds, COL_SORTED),
                [arr[j].id]: COL_SWAP,
                [arr[min_idx].id]: COL_SWAP
            });
        }
        sortedIds.add(arr[j].id);
        yield snapshot(arr, 1, `Index ${j} sorted`, mapColors(sortedIds, COL_SORTED));
    }
    sortedIds.add(arr[arr.length-1].id);
    yield snapshot(arr, 11, "Done!", mapColors(sortedIds, COL_SORTED));
}

function* bubbleSortGen(arr) {
    let sortedIds = new Set();
    for (let j = arr.length - 1; j > 0; j--) {
        let swapped = false;
        yield snapshot(arr, 1, `Pass ending at ${j}`, mapColors(sortedIds, COL_SORTED));
        
        for (let i = 0; i < j; i++) {
            yield snapshot(arr, 3, `Compare ${arr[i].value} > ${arr[i+1].value}?`, {
                ...mapColors(sortedIds, COL_SORTED),
                [arr[i].id]: COL_COMPARE,
                [arr[i+1].id]: COL_COMPARE
            });
            
            if (arr[i].value > arr[i+1].value) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
                
                yield snapshot(arr, 4, "Swap!", {
                    ...mapColors(sortedIds, COL_SORTED),
                    [arr[i].id]: COL_SWAP,
                    [arr[i+1].id]: COL_SWAP
                });
            }
        }
        sortedIds.add(arr[j].id);
        yield snapshot(arr, 7, `${arr[j].value} sorted`, mapColors(sortedIds, COL_SORTED));
        
        if (!swapped) {
            // Mark rest as sorted
            for(let k=0; k<j; k++) sortedIds.add(arr[k].id);
            yield snapshot(arr, 9, "Sorted early.", mapColors(sortedIds, COL_SORTED));
            return;
        }
    }
    sortedIds.add(arr[0].id);
    yield snapshot(arr, 9, "Done!", mapColors(sortedIds, COL_SORTED));
}

// Start
init();