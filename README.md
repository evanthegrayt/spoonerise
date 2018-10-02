# Welcome to Spoonerise -- a word game for the command-line.
We've all done it; someone says a phrase, and you flip the first few letters
around, and sometimes, it makes an even funnier phrase. For example:
"Tomb Raider" becomes "Romb Taider".
Well, when I was in high school, we took it further -- probably too far -- and
made a rule set. This program follows those rules, which are listed below.

## Installation
From your terminal, clone the repository where you want it.
```sh
git clone https://github.com/evanthegrayt/spoonerise.git
```
#### Rake
If you have `rake` installed (`gem install rake`), from inside the base
repository directory, run:
```sh
cd spoonerise
rake
```
This will link the executable in your path (`/usr/local/bin`).

To uninstall, run `rake uninstall`

#### Manual
If you aren't using `rake`, you can link the executable yourself. From inside
the base repository directory, run:
```sh
cd spoonerise
ln -s $PWD/bin/spoonerise /usr/local/bin/spoonerise
```
To uninstlal, run `rm /usr/local/bin/spoonerise`

## Updating
This is just a fun project I'm working on, and it's under active development. I
recommend updating regularly to get the newest features. From the base
directory, run:
```sh
rake update
```
OR
```sh
git pull origin master
```

## Usage
Just pass the phrase as arguments:
```sh
spoonerise this is a sentence # => is sis a thentence
```
Options include:
```sh
-r                  # Reverse the order of the flipping
-l                  # Lazily ignore common small words, like "the", "an", etc.
-s                  # Save the results in a log file to laugh at later
-f WORD             # Search the log for WORD. If WORD not supplied, print log
--exclude=WORD,LIST # Words you don't want altered.
-h                  # See all available options
```

## Rules of the Game
- Each word drops its leading consonant group and takes the leading consonant
group of the next word.
- If the word has no leading consonants, nothing is dropped, but it still
receives the next word's leading consonants if it has any.
- If the next word has no leading consonants, the current word receives no
consonants, but will still lose its own if it has any.
- Single-letter words ("a", "I") remain unchanged.
- When being "lazy", common words ("the", "his", etc.) remain unchanged.
- If the word to pull from is excluded, that word is skipped, and you pull the
leading consonants from the next non-excluded word.
- "Q" and "U" should stay together (like "queen").

## Bugs/Issues
- I haven't written the unit tests yet...
- If you come across any bugs, feel free to make an issue and/or a pull request.

