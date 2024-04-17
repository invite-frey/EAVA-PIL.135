# EAVA-PIL.135
PIL.135 Basics of Research and Research Project

### Integrating Artificial Intelligence in Aviation: Opportunities and Challenges in the Adoption of Large-Scale Language Models

This work investigates how the rapid development of Large-Scale Language models (LLMs) within the realm of Artificial Intelligence (AI), like ChatGPT, creates new opportunities in the aviation industry. This repo contains the data and code used for the research part of the thesis.

### Installing

```
git clone git@github.com:invite-frey/fps-hk-qrcode.git
```
### Usage

The run_assistant app uses files located in the data folder as input as follows:

* **NOTAMS** : One or more json-files containing NOTAMs downloaded from the ICAO API Data Service at https://www.icao.int/Aviation-API-Data-Service/Pages/default.aspx .
* **Questions** : The questions used to query the LLM with in a file named "questions.txt". One question per line.
* **Prompt** : The prompt used to query the LLM in a file named "prompt.txt".

The app outputs answers to the questions as markdown formatted file in answers-run-<date>.md 

```
cd code
./run_assistant
```

## Author

* **Frey Mansikkaniemi** - [InviteFrey](https://github.com/invite-frey)

## License

The code associated with this project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details