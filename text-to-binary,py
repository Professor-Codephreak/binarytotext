#!/usr/bin/env python3

import sys

def text_to_binary(text):
    try:
        # Convert each character to its binary representation
        return ' '.join(format(ord(char), '08b') for char in text)
    except Exception as e:
        return f"Error: {e}"

def main():
    if len(sys.argv) < 2:
        print("❗ Usage: python3 text-to-binary.py 'Your text here'")
        sys.exit(1)

    input_text = ' '.join(sys.argv[1:])
    binary_output = text_to_binary(input_text)
    print(f"📝 Original Text:\n{input_text}\n")
    print(f"🔢 Binary Output:\n{binary_output}")

if __name__ == "__main__":
    main()
