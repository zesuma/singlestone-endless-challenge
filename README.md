# Singlestone ENDLESS challenge

## Breakdown of Steps

## [Components](https://github.com/zesuma/singlestone-endless-challenge/tree/main/src/components)

[Header Component](https://github.com/zesuma/singlestone-endless-challenge/blob/main/src/components/Header.jsx) where the ENDLESS logo header code resides.

[Hero Component](https://github.com/zesuma/singlestone-endless-challenge/blob/main/src/components/Hero.jsx) for the static Hero content. Title, description text and cta button. Also holds the background image.

## [App.js](https://github.com/zesuma/singlestone-endless-challenge/blob/main/src/App.js)

For the How It Works section, I sorted the data by ascending order by sorting the stepNumbers: 
`.sort((a,b) => a.stepNumber > b.stepNumber ? a : b)`

Then used .map to loop through:

`.map(item => ...`

Finally, I used .reduce to pull in the correct title and p for each card:

`{item.versionContent.reduce((a, b) => a.effectiveDate > b.effectiveDate ? a : b).title}`

`{item.versionContent.reduce((a, b) => a.effectiveDate > b.effectiveDate ? a : b).body}`




## [Hooks](https://github.com/zesuma/singlestone-endless-challenge/tree/main/src/hooks/useFetchHook)

Added a Hook for the json data [async code](https://github.com/zesuma/singlestone-endless-challenge/blob/main/src/hooks/useFetchHook/index.jsx). Used `useState` to check for data and errors. 



