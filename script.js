// Initialize Terminal
const term = new Terminal({
    cursorBlink: true,
    theme: {
        background: '#1e1e1e',
        foreground: '#00ff00',
    },
    fontSize: 16
});

term.open(document.getElementById('xterm-container'));

// Command History
let history = [];
let historyIndex = -1;

// Welcome Message
const showWelcomeMessage = () => {
    term.writeln("Welcome to the Enhanced Text ↔ Binary Converter");
    term.writeln("Type 'text2bin <your text>' to convert text to binary.");
    term.writeln("Type 'bin2text <binary>' to convert binary to text.");
    term.writeln("Type 'help' for available commands.");
    term.writeln("---------------------------------------------------");
    term.prompt();
};

term.prompt = () => term.write('\r\n> ');

let commandBuffer = "";

// Auto-scroll Terminal
function autoScroll() {
    term.scrollToBottom();
}

// Loading Animation
function showLoading(callback) {
    let dots = 0;
    const loadingInterval = setInterval(() => {
        if (dots < 3) {
            term.write(".");
            dots++;
        } else {
            term.write("\b\b\b   \b\b\b");
            dots = 0;
        }
    }, 300);
    setTimeout(() => {
        clearInterval(loadingInterval);
        callback();
    }, 1000);
}

// Command Input Handler
term.onKey(e => {
    const char = e.key;
    const ev = e.domEvent;

    if (ev.key === 'Enter') {
        processCommand(commandBuffer.trim());
        if (commandBuffer) history.push(commandBuffer);
        historyIndex = history.length;
        commandBuffer = "";
        term.prompt();
    } else if (ev.key === 'Backspace') {
        if (commandBuffer.length > 0) {
            commandBuffer = commandBuffer.slice(0, -1);
            term.write('\b \b');
        }
    } else if (ev.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            replaceCommand(history[historyIndex]);
        }
    } else if (ev.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            replaceCommand(history[historyIndex]);
        } else {
            replaceCommand('');
        }
    } else if (ev.ctrlKey && ev.key === 'l') {
        term.clear();
        showWelcomeMessage();
    } else if (ev.key.length === 1) {
        commandBuffer += char;
        term.write(char);
    }
});

// Replace Input Line
function replaceCommand(newCommand) {
    term.write('\x1b[2K\r> ' + newCommand);
    commandBuffer = newCommand;
}

// Command Processor
function processCommand(input) {
    const [command, ...args] = input.split(" ");
    const content = args.join(" ");

    switch (command.toLowerCase()) {
        case 'text2bin':
            handleTextToBinary(content);
            break;

        case 'bin2text':
            handleBinaryToText(content);
            break;

        case 'help':
            displayHelp();
            break;

        case 'clear':
            term.clear();
            showWelcomeMessage();
            break;

        default:
            term.writeln(`⚠️ Unknown command: '${command}'`);
            term.writeln(`Type 'help' to view available commands.`);
    }
    autoScroll();
}

// Command Handlers
function handleTextToBinary(text) {
    if (!text) {
        term.writeln("⚠️ Please provide text to convert.");
        return;
    }
    showLoading(() => term.writeln(`Binary: ${textToBinary(text)}`));
}

function handleBinaryToText(binary) {
    if (!binary) {
        term.writeln("⚠️ Please provide binary input.");
        return;
    }
    showLoading(() => term.writeln(`Text: ${binaryToText(binary)}`));
}

function displayHelp() {
    term.writeln("Commands:");
    term.writeln("  text2bin <text>   → Convert text to binary");
    term.writeln("  bin2text <binary> → Convert binary to text");
    term.writeln("  clear             → Clear the terminal");
}

// Text to Binary
function textToBinary(text) {
    return text
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
}

// Binary to Text with Error Handling
function binaryToText(binary) {
    const binaryArray = binary.trim().split(' ');
    try {
        return binaryArray
            .map(bin => {
                if (bin.length !== 8 || /[^01]/.test(bin)) {
                    throw new Error(`Invalid binary segment: '${bin}'`);
                }
                return String.fromCharCode(parseInt(bin, 2));
            })
            .join('');
    } catch (error) {
        return `⚠️ Error: ${error.message}`;
    }
}

// Initialize Terminal
showWelcomeMessage();
