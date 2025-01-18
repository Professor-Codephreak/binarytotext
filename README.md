# binary-to-text

# 🖥️ Binary to Text Converter

## 📚 Description

🚀 Enhanced Features Summary
🛡 Robust Error Handling

Detects invalid binary sequences and alerts users.
📜 Command History

Navigate with Arrow Up/Down.
⌨️ Keyboard Shortcuts

Ctrl + L → Clears terminal.
⏳ Loading Animation

Feedback during conversions.
🖥 Responsive UI

Mobile-friendly and auto-scrolls output.
🔥 Usage Examples
Convert Text to Binary:

text2bin Hello
Output:

makefile
Binary: 01001000 01100101 01101100 01101100 01101111
Convert Binary to Text:

bin2text 01001000 01100101 01101100 01101100 01101111
Output:

makefile
Text: Hello

---------------------------

This Python program converts binary strings into human-readable text. It is designed to work seamlessly in both command-line interfaces and UI integrations like **terminal.js**.

## 🚀 Features

- Converts **space-separated binary strings** into text.
- **Error handling** for invalid input.
- Optimized for **terminal.js** integration.
- Clear and user-friendly prompts.

## 🛠️ Requirements

- Python 3.x

## 📦 Installation

```bash
git clone https://github.com/Professor-Codephreak/binary-to-text-converter.git
cd binary-to-text-converter
python binary_to_text.py
```
📖 Usage
🔹 Command-Line Mode
```bash
python3 binary_to_text.py
```
Example Input:

```css
Enter binary input: 01001000 01100101 01101100 01101100 01101111
```
Output:
mathematica

Decoded Text: Hello
🔹 UI Integration (Terminal.js)

This script is built for easy integration with web-based terminal interfaces.

Use the function binary_to_text() in your backend and pass user input for smooth UI experience.

⚠️ Error Handling
If the binary input is invalid, the program will alert the user</ br>
***Input must be space-separated 8-bit binary numbers***
RTFM
📜 License
MIT License

## 📝 **binary_to_text.py**

```python
#!/usr/bin/env python3
"""
Binary to Text Converter
Author: Gregory L. Magnusson
Description: Converts binary strings into human-readable text with robust error handling
"""

def binary_to_text(binary_input):
    """
    Converts a space-separated binary string to readable text.
    
    :param binary_input: String with space-separated 8-bit binary numbers.
    :return: Decoded text or an error message.
    """
    try:
        # Check if input is empty
        if not binary_input.strip():
            return "⚠️ Error: Input cannot be empty."

        # Validate each binary segment
        for b in binary_input.split():
            if not all(char in '01' for char in b):
                return f"⚠️ Error: Invalid binary segment detected -> '{b}'. Only 0 and 1 are allowed."
            if len(b) != 8:
                return f"⚠️ Error: Each binary segment must be 8 bits. Error at -> '{b}'."

        # Convert binary to text
        text_output = ''.join([chr(int(b, 2)) for b in binary_input.split()])
        return f"✅ Decoded Text: {text_output}"

    except Exception as e:
        return f"⚠️ Error: {str(e)}"

def main():
    """
    Main function for command-line interaction.
    """
    print("🖥️ Binary to Text Converter\n")
    print("🔹 Enter space-separated 8-bit binary numbers to decode.")
    print("🔹 Example: 01001000 01100101 01101100 01101100 01101111\n")

    # Loop for continuous input
    while True:
        try:
            binary_input = input("Enter binary input (or type 'exit' to quit): ").strip()
            if binary_input.lower() == 'exit':
                print("👋 Exiting Binary to Text Converter. Goodbye!")
                break

            result = binary_to_text(binary_input)
            print(result + "\n")

        except KeyboardInterrupt:
            print("\n👋 Exiting Binary to Text Converter. Goodbye!")
            break

if __name__ == "__main__":
    main()
```

🔍 Code Explanation
🔹 Function: binary_to_text(binary_input)
Purpose: Converts a space-separated binary string into readable text.
Validation: Checks if input is empty, validates each segment for correct format (only 0 and 1), and ensures 8-bit segments.
Error Handling: Returns user-friendly error messages if invalid data is detected.
Conversion: Converts each valid 8-bit binary segment to its corresponding ASCII character.
🔹 Function: main()
Interactive CLI: Allows users to input binary data continuously.
Exit Command: Typing 'exit' cleanly ends the program.
Error Handling: Catches interruptions (Ctrl+C) and provides a friendly exit message.
🔌 Integration with Terminal.js
UI Compatibility: This script is designed to be easily integrated with terminal.js.
Backend Usage: Call the binary_to_text() function with user input from the frontend.
🔎 Example Inputs and Outputs
✅ Valid Input:
```vbnet
Input: 01001000 01100101 01101100 01101100 01101111
Output: ✅ Decoded Text: Hello
⚠️ Invalid Input (Non-Binary Character):
```vbnet

Input: 01001000 01100101 01101100 0110a11
Output: ⚠️ Error: Invalid binary segment detected -> '0110a11'. Only 0 and 1 are allowed.
⚠️ Invalid Input (Wrong Length):
```vbnet
Input: 0100100 01100101 01101100
Output: ⚠️ Error: Each binary segment must be 8 bits. Error at -> '0100100'.
```

📄 License
This project is licensed under the MIT License. Feel free to modify and distribute.

🔧 Built for Developers
💡 Designed for Simplicity
🔒 Powered by Logic
