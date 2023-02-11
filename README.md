# Hangman Helper

[Click here to visit the site.](https://ibrahimmudassar.github.io/HangmanHelper/)

This tool allows you to find the answer to a prompt from the 400k most common words in the english language.
Also gives you a list of letters that are your next best guesses

## Usage

If you give the input a string that is 5 letters long such as "hel.." it will only output 5 letter words that start with "hel" and the last two can be any letter in the alphabet. If you also input exclude letters then those will be excluded from the analysis

### Guess

This input will include letter and non-letter inputs to simulate possible letters

#### Example

> Guess: hel.. Exclude:

- HELEN
- HELLO
- HELLS
- HELMS
- HELPS
- HELIX

### Exclude

Exclude will take the letters that you give and remove all words that include any of those letters

#### Example

will exclude any words that include "s" or "i"

> Guess: hel.. Exclude: si

- HELEN
- HELLO

## Roadmap

Currently this takes up a lot of ram in the browser so the next step would be to turn this into a restful API and output those results.

## Contributing

This is written in vanilla JS so feel free to view the code and pull request what can be optimized
