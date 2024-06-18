const filterOptions = {
  applyFilters: (searchResults, filters) => {
    let filteredResults = searchResults;

    if (filters.duration) {
      filteredResults = filteredResults.filter(result => result.duration <= filters.duration);
    }

    if (filters.quality) {
      filteredResults = filteredResults.filter(result => result.quality === filters.quality);
    }

    if (filters.popularity) {
      filteredResults = filteredResults.filter(result => result.popularity >= filters.popularity);
    }

    return filteredResults;
  },

  sortResults: (searchResults, sortBy) => {
    let sortedResults = [...searchResults];

    if (sortBy === 'name') {
      sortedResults.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'duration') {
      sortedResults.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === 'popularity') {
      sortedResults.sort((a, b) => b.popularity - a.popularity);
    }

    return sortedResults;
  },

  formatResults: (searchResults) => {
    let formattedResults = '';

    searchResults.forEach(result => {
      formattedResults += `Name: ${result.name}\nDuration: ${result.duration}\nQuality: ${result.quality}\nPopularity: ${result.popularity}\n\n`;
    });

    return formattedResults;
  }
};

module.exports = filterOptions;