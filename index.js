
function superbowlWin (arr) {
    function isWin(wins) {
        return wins.result === "W";
    }
    const results = arr.find(isWin)
    if (results === undefined) {
        return results
    } else {
        return results.year
    }
}