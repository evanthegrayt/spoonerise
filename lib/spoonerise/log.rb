require 'csv'
require 'fileutils'

module Spoonerise
  ##
  # Class that handles reading/writing logs.
  class Log

    ##
    # The file name to use.
    attr_reader :file

    ##
    # Constructor for Log.
    #
    # @param [String] file
    #
    # @return [Spoonerise::Log]
    def initialize(file)
      @file = File.expand_path(file)
      FileUtils.touch(file) unless File.file?(file)
    end

    ##
    # The contents of the log file.
    #
    # @return [Array]
    def contents
      ::CSV.read(file)
    end

    ##
    # Writes a line to the log.
    #
    # @param [Array] row
    #
    # @return [Array]
    def write(row)
      ::CSV.open(file, 'wb') { |csv| csv << row }
    end

    ##
    # Iterate through each line of the file.
    def each
      contents.each { |row| yield row }
    end

    ##
    # Number of entries in the file.
    #
    # @return [Integer]
    def size
      contents.size
    end
  end
end
