var search_data = {"index":{"searchIndex":["spoonerize","bumper","cli","log","spoonerism","version","all_excluded_words()","bump()","config_file=()","config_file_loaded?()","contents()","each()","enough_flippable_words?()","execute()","lazy?()","load_config_file()","longest_word_length()","map?()","new()","new()","new()","new()","print?()","print_log()","print_mappings()","reverse?()","reverse?()","save()","save?()","size()","spoonerism()","spoonerize()","to_h()","to_json()","to_s()","to_s()","write()","readme"],"longSearchIndex":["spoonerize","spoonerize::bumper","spoonerize::cli","spoonerize::log","spoonerize::spoonerism","spoonerize::version","spoonerize::spoonerism#all_excluded_words()","spoonerize::bumper#bump()","spoonerize::spoonerism#config_file=()","spoonerize::spoonerism#config_file_loaded?()","spoonerize::log#contents()","spoonerize::log#each()","spoonerize::spoonerism#enough_flippable_words?()","spoonerize::cli::execute()","spoonerize::spoonerism#lazy?()","spoonerize::spoonerism#load_config_file()","spoonerize::cli#longest_word_length()","spoonerize::cli#map?()","spoonerize::bumper::new()","spoonerize::cli::new()","spoonerize::log::new()","spoonerize::spoonerism::new()","spoonerize::cli#print?()","spoonerize::cli#print_log()","spoonerize::cli#print_mappings()","spoonerize::bumper#reverse?()","spoonerize::spoonerism#reverse?()","spoonerize::spoonerism#save()","spoonerize::cli#save?()","spoonerize::log#size()","spoonerize::cli#spoonerism()","spoonerize::spoonerism#spoonerize()","spoonerize::spoonerism#to_h()","spoonerize::spoonerism#to_json()","spoonerize::spoonerism#to_s()","spoonerize::version::to_s()","spoonerize::log#write()",""],"info":[["Spoonerize","","Spoonerize.html","","<p>The main namespace for the gem.\n"],["Spoonerize::Bumper","","Spoonerize/Bumper.html","","<p>Class that handles bumping an index.\n"],["Spoonerize::Cli","","Spoonerize/Cli.html","","<p>The class for handling the command-line interface.\n"],["Spoonerize::Log","","Spoonerize/Log.html","","<p>Class that handles reading/writing logs.\n"],["Spoonerize::Spoonerism","","Spoonerize/Spoonerism.html","","<p>The main word-flipper.\n"],["Spoonerize::Version","","Spoonerize/Version.html","","<p>Module that contains all gem version information. Follows semantic versioning. Read: semver.org/\n"],["all_excluded_words","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-all_excluded_words","()","<p>Returns an array of words to exclude by combining three arrays:\n<p>Any word in the passed arguments that&#39;s …\n"],["bump","Spoonerize::Bumper","Spoonerize/Bumper.html#method-i-bump","()","<p>Increments/Decrements the bumper. If on the last element of the words array, sets the bumper to 0. We …\n"],["config_file=","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-config_file-3D","(config_file)","<p>Setter for <code>config_file</code>. Must be expanded in case the user uses `~` for home.\n<p>@param [String] file\n<p>@return …\n"],["config_file_loaded?","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-config_file_loaded-3F","()","<p>Has a config file been loaded?\n<p>@return [Boolean]\n"],["contents","Spoonerize::Log","Spoonerize/Log.html#method-i-contents","()","<p>The contents of the log file.\n<p>@return [Array]\n"],["each","Spoonerize::Log","Spoonerize/Log.html#method-i-each","()","<p>Iterate through each line of the file.\n<p>@return [Array]\n"],["enough_flippable_words?","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-enough_flippable_words-3F","()","<p>Returns true if there are more than one non-excluded word to flip\n"],["execute","Spoonerize::Cli","Spoonerize/Cli.html#method-c-execute","(options = [])","<p>Creates an instance of <code>Spoonerism</code> and runs what the user requested.\n<p>@param [Array] options\n"],["lazy?","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-lazy-3F","()","<p>Should the lazy words be excluded?\n"],["load_config_file","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-load_config_file","()","<p>Loads the config file\n<p>@return [Hash] The config options\n"],["longest_word_length","Spoonerize::Cli","Spoonerize/Cli.html#method-i-longest_word_length","()","<p>The length of the longest word in the phrase.\n<p>@return [Integer]\n"],["map?","Spoonerize::Cli","Spoonerize/Cli.html#method-i-map-3F","()","<p>Should we print the mappings to the command line?\n<p>@return [Boolean]\n"],["new","Spoonerize::Bumper","Spoonerize/Bumper.html#method-c-new","(initial_value, max_value, reverse = false)","<p>Sets the bumper relative to the current index of words array. The value is automatically bumped once …\n"],["new","Spoonerize::Cli","Spoonerize/Cli.html#method-c-new","(options)","<p>Create instance of <code>Cli</code>\n<p>@param [Array] options\n<p>@return [self]\n"],["new","Spoonerize::Log","Spoonerize/Log.html#method-c-new","(file)","<p>Constructor for Log.\n<p>@param [String] file\n<p>@return [Spoonerize::Log]\n"],["new","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-c-new","(words, config_file = nil)","<p>Initialize instance. You can also use the <code>config_file</code> either by passing it at initialization, or via …\n"],["print?","Spoonerize::Cli","Spoonerize/Cli.html#method-i-print-3F","()","<p>Should we print to the command line?\n<p>@return [Boolean]\n"],["print_log","Spoonerize::Cli","Spoonerize/Cli.html#method-i-print_log","()","<p>Print the log file contents to the command line.\n<p>@return [nil]\n"],["print_mappings","Spoonerize::Cli","Spoonerize/Cli.html#method-i-print_mappings","()","<p>Print the hash of mappings to the command line.\n<p>@return [nil]\n"],["reverse?","Spoonerize::Bumper","Spoonerize/Bumper.html#method-i-reverse-3F","()","<p>Should we decrement instead of increment?\n<p>@return [Boolean]\n"],["reverse?","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-reverse-3F","()","<p>Should the words flip the other direction?\n"],["save","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-save","()","<p>Saves the flipped words to the log file, along with the options\n"],["save?","Spoonerize::Cli","Spoonerize/Cli.html#method-i-save-3F","()","<p>Should we save to the log file?\n<p>@return [Boolean]\n"],["size","Spoonerize::Log","Spoonerize/Log.html#method-i-size","()","<p>Number of entries in the file.\n<p>@return [Integer]\n"],["spoonerism","Spoonerize::Cli","Spoonerize/Cli.html#method-i-spoonerism","()","<p>Sets up an instance of <code>Spoonerize::Spoonerism</code> and passes all user preferences.\n<p>@return [Spoonerize::Spoonerism] …\n"],["spoonerize","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-spoonerize","()","<p>Iterates through words array, and maps its elements to the output of flip_words. Returns results as an …\n"],["to_h","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-to_h","()","<p>Returns hash of the original words mapped to their flipped counterparts.\n"],["to_json","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-to_json","()","<p>Same as to_h, but as json.\n"],["to_s","Spoonerize::Spoonerism","Spoonerize/Spoonerism.html#method-i-to_s","()","<p>Returns spoonerize array as a joined string.\n"],["to_s","Spoonerize::Version","Spoonerize/Version.html#method-c-to_s","()","<p>Version as <code>MAJOR.MINOR.PATCH</code>\n"],["write","Spoonerize::Log","Spoonerize/Log.html#method-i-write","(row)","<p>Writes a line to the log.\n<p>@param [Array] row\n<p>@return [Array]\n"],["README","","README_md.html","","<p>Welcome to Spoonerize – a word game.\n<p><img src=\"https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fevanthegrayt%2Fspoonerize%2Fbadge%3Fref%3Dmaster&style=flat\"> …\n\n<blockquote>"]]}}