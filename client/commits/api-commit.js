//Github API 
//GET commits of repo JairMoralesNovoa/FulltimeforceTask
//commit date betwen 2019-03-1 to 2022-03-31 to catch all commits
//Headers needed to see detail info
//resolve as json

const getCommits = async () => {
    try {
        const url = "https://api.github.com/search/commits?q=repo:JairMoralesNovoa/FulltimeforceTask author-date:2019-03-01..2022-03-31";
        const headers = {
            "Accept": "application/vnd.github.cloak-preview"
        };
        const response = await fetch(url, {
            "method": "GET",
            "headers": headers
        });

        return await response.json();

    } catch(err) {
        console.log(err);
    }
}

export default getCommits;


