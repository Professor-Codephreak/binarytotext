#!/usr/bin/env python3
"""
Binary to Text Converter
========================
This script converts binary data back to human-readable text.

Usage:
    python binary_to_text.py "01001000 01100101 01101100 01101100 01101111"
"""

import sys

def binary_to_text(binary_input):
    """Convert binary input to readable text."""
    binary_values = binary_input.strip().split()
    decoded_chars = []

    for binary in binary_values:
        if len(binary) != 8 or not all(bit in '01' for bit in binary):
            raise ValueError(f"Invalid binary segment: '{binary}'")
        decoded_chars.append(chr(int(binary, 2)))

    return ''.join(decoded_chars)

def main():
    if len(sys.argv) != 2:
        print("⚠️  Error: Please provide binary input separated by spaces.")
        print("Usage: python binary_to_text.py \"01001000 01100101 01101100 01101100 01101111\"")
        sys.exit(1)

    binary_input = sys.argv[1]

    try:
        text_output = binary_to_text(binary_input)
        print(f"💾 Binary Input: {binary_input}")
        print(f"🔤 Decoded Text: {text_output}")
    except ValueError as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
