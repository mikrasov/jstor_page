import Layout from "../../components/layout";
import React, { useState } from "react";
import {Doughnut, Line, Bar, HorizontalBar} from "react-chartjs-2";
import {Row, Col, Table} from 'react-bootstrap'


const data = {

    options: {
        Top:    { color: "#3182bd", label: "Top-Philosophy" },
        NonTop: { color: "#9ecae1", label: "Non-Top Philosophy" },
        Int:    { color: "#deebf7", label: "Interdisciplinary"},
    },

    journals: {
        labels: ['American Philosophical Quarterly', 'Analysis', 'Apeiron', 'Business & Professional Ethics Journal', 'Business Ethics Quarterly', 'Canadian Journal of Philosophy', 'Classical Philology', 'Critical Inquiry', 'Erkenntnis (1975-)', 'Ethical Theory and Moral Practice', 'Ethics', 'Feminist Studies', 'Harvard Law Review', 'Hypatia', 'Inquiry', 'Inter. Journal for Philosophy of Religion', 'Isis', 'Journal of Medical Ethics', 'Journal of Nietzsche Studies', 'Journal of Philosophical Logic', 'Journal of the History of Ideas', 'Law and Philosophy', 'Linguistics and Philosophy', 'Mind', 'Noûs', 'Philosophical Issues', 'Philosophical Perspectives', 'Philosophical Studies', 'Philosophy', 'Philosophy & Public Affairs', 'Philosophy East and West', 'Phil. and Phenomenological Research', 'Philosophy of Science', 'Phronesis', 'Political Theory', 'Polity', 'Proceedings of the Aristotelian Society', 'Public Affairs Quarterly', 'Religious Studies', 'Studia Logica', 'Synthese', 'The British Journal for the Phil. of Sci.', 'The Bulletin of Symbolic Logic', 'The Journal of Aesthetics and Art Crit.', 'The Journal of Ethics', 'The Journal of Philosophy', 'The Journal of Religious Ethics', 'The Journal of Speculative Philosophy', 'The Journal of Symbolic Logic', 'The Monist', 'The Philosophical Quarterly', 'The Philosophical Review', 'The Pluralist', 'The Review of Metaphysics', 'The Review of Politics', 'Trans. of the Charles S. Peirce Society'],
        colors: ["#3182bd", "#3182bd", "#9ecae1", "#deebf7", "#deebf7", "#3182bd", "#deebf7", "#deebf7", "#3182bd", "#9ecae1", "#3182bd", "#deebf7", "#deebf7", "#9ecae1", "#9ecae1", "#9ecae1", "#deebf7", "#deebf7", "#9ecae1", "#3182bd", "#deebf7", "#9ecae1", "#9ecae1", "#3182bd", "#3182bd", "#9ecae1", "#9ecae1", "#3182bd", "#9ecae1", "#3182bd", "#9ecae1", "#3182bd", "#3182bd", "#9ecae1", "#deebf7", "#deebf7", "#3182bd", "#9ecae1", "#9ecae1", "#deebf7", "#3182bd", "#3182bd", "#deebf7", "#9ecae1", "#9ecae1", "#3182bd", "#9ecae1", "#9ecae1", "#deebf7", "#9ecae1", "#3182bd", "#3182bd", "#deebf7", "#9ecae1", "#deebf7", "#9ecae1"],
        values: {
            1900: [null, null, null, null, null, null, 0.0, null, null, null, null, null, 0.0, null, null, null, null, null, null, null, null, null, null, 11.9, null, null, null, null, null, null, null, null, null, null, null, null, 0.0, null, null, null, null, null, null, null, null, null, null, null, null, 0.0, null, 10.7, null, null, null, null],
            1910: [null, null, null, null, null, null, 5.8, null, null, null, null, null, 0.8, null, null, null, 5.9, null, null, null, null, null, null, 12.5, null, null, null, null, null, null, null, null, null, null, null, null, 7.7, null, null, null, null, null, null, null, null, null, null, null, null, 0.0, null, 7.8, null, null, null, null],
            1920: [null, null, null, null, null, null, 11.3, null, null, null, null, null, 0.4, null, null, null, 9.6, null, null, null, null, null, null, 14.8, null, null, null, null, null, null, null, null, null, null, null, null, 33.3, null, null, null, null, null, null, null, null, 6.7, null, null, null, 0.0, null, 8.7, null, null, null, null],
            1930: [null, 14.3, null, null, null, null, 14.0, null, null, null, 0.0, null, 0.7, null, null, null, 11.2, null, null, null, null, null, null, 12.0, null, null, null, null, 16.7, null, null, null, 1.0, null, null, null, 12.5, null, null, null, null, null, null, null, null, 1.7, null, null, 0.0, 0.0, null, 8.1, null, null, 0.0, null],
            1940: [null, 12.5, null, null, null, null, 17.5, null, null, null, 2.0, null, 0.7, null, null, null, 16.2, null, null, null, 10.5, null, null, 6.3, null, null, null, null, 33.3, null, null, 2.8, 1.1, null, null, null, 0.0, null, null, null, 0.0, null, null, 12.9, null, 4.0, null, null, 4.0, null, null, 5.7, null, 0.0, 7.3, null],
            1950: [null, 5.0, null, null, null, null, 6.1, null, null, null, 2.3, null, 0.9, null, null, null, 10.7, null, null, null, 8.1, null, null, 5.3, null, null, null, 5.7, 17.5, null, 0.0, 1.8, 4.6, 18.2, null, null, 25.0, null, null, 40.0, 0.0, 10.0, null, 7.8, null, 9.4, null, null, 4.1, null, 2.6, 5.0, null, 3.0, 9.7, null],
            1960: [3.5, 2.5, 0.0, null, null, null, 8.9, null, null, null, 3.2, null, 2.1, null, 27.6, null, 6.3, null, null, null, 9.7, null, null, 6.8, 1.5, null, null, 4.2, 6.7, null, 2.1, 3.6, 3.9, 4.7, null, 0.0, 6.7, null, 11.1, 0.0, 9.5, 11.6, null, 12.9, null, 7.1, null, null, 4.6, 1.5, 10.2, 3.2, null, 5.8, 0.8, 20.0],
            1970: [8.1, 6.2, 0.0, null, null, 7.6, 15.5, 13.3, 5.9, null, 10.4, 89.8, 1.3, null, 13.6, 0.0, 7.1, 23.1, null, 4.4, 13.1, null, 19.4, 9.2, 5.5, null, null, 5.1, 17.4, 8.3, 7.4, 4.9, 6.1, 18.9, 12.5, 5.4, 21.4, null, 0.0, 7.8, 5.5, 4.8, null, 12.7, null, 6.7, 0.0, null, 7.5, 6.6, 10.7, 9.8, null, 10.6, 7.9, 2.9],
            1980: [8.2, 6.5, 20.7, 12.8, null, 11.5, 12.6, 22.9, 7.5, null, 15.3, 94.5, 10.2, 87.3, 26.4, 1.5, 16.0, 11.0, null, 2.8, 14.1, 12.2, 23.7, 7.1, 7.5, null, 8.3, 10.8, 18.9, 15.2, 9.6, 10.2, 8.0, 19.5, 16.9, 12.9, 12.9, 22.9, 12.1, 8.2, 6.4, 4.9, null, 15.7, null, 14.9, 9.8, 30.0, 9.2, 10.1, 9.3, 13.5, null, 14.9, 6.8, 5.0],
            1990: [13.7, 6.9, 23.3, 15.6, 14.5, 12.2, 25.5, 32.6, 8.1, 20.0, 21.8, 94.2, 20.7, 87.2, 34.4, 4.0, 25.7, 25.9, 0.0, 3.2, 17.9, 15.5, 17.0, 8.7, 10.1, 3.7, 14.5, 12.4, 11.1, 12.1, 11.0, 12.9, 12.1, 17.5, 26.7, 19.3, 15.2, 15.2, 6.2, 6.7, 11.9, 6.2, 5.7, 18.3, 22.9, 14.3, 15.9, 19.0, 10.2, 10.7, 8.9, 14.2, null, 9.9, 9.1, 21.7],
            2000: [16.5, 10.4, 20.0, 28.9, 21.4, 10.3, 24.8, 29.2, 10.3, 22.0, 17.2, 92.8, 16.0, 86.2, 35.0, 7.3, 35.8, 39.1, 23.5, 8.9, 25.1, 18.9, 22.4, 8.2, 12.1, null, null, 14.8, 12.8, 16.0, 10.3, 13.6, 16.3, 18.2, 27.7, 22.2, 21.5, 14.0, 3.0, 11.6, 11.3, 8.9, 8.3, 23.3, 13.1, 13.3, 14.2, 19.0, 13.7, 15.4, 12.4, 14.5, 11.5, 18.2, 10.4, 20.5],
        }

    },

    //Types by Decade
    types: {
        labels: [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000],

        colors: {
            Top: ["#bd3131","#3182bd"],
            NonTop: ["#e19e9e","#9ecae1"],
            Int: ["#f7dede","#deebf7"],
        },

        values: {
            Top: [10.6, 9.0, 8.4, 4.6, 3.6, 5.9, 5.5, 7.1, 9.6, 11.3, 12.8],
            NonTop: [0.0, 0.0, 0.0, 13.8, 16.4, 7.7, 9.1, 11.7, 21.5, 27.8, 27.9],
            Int: [0.0, 2.8, 5.4, 6.5, 8.8, 6.0, 5.5, 12.9, 17.6, 22.1, 24.2]
        }
    },

    aos:{
        labels: ['G', 'H', 'S', 'V', 'LEMM'],
        values: {
            Top: [12.8,null,16.7,10.3,12.4] ,
            NonTop: [28.9,40.0,18.0,21.3,null] ,
            Int: [29.2,38.3,23.4,null,12.1] ,
        }
    },

    review:{
        labels: ['Double Anonymous', 'Triple Anonymous', 'Non-Anonymous'],
        values: {
            Top: [13.3,11.7,21.5],
            NonTop: [28.4,null,16.4],
            Int: [26.0,39.1,17.3],
        }
    }
}


function constructDataSet(cat){
    var chartData = {
        labels: data[cat].labels,
        datasets: []
    };

    ["Top","NonTop","Int"].forEach(function (t) {
        chartData.datasets.push({
            label: data.options[t].label,
            backgroundColor: data.options[t].color,
            borderColor: data.options[t].color,
            fill: false,
            data: data[cat].values[t]
        });
    });

    return chartData
}


function selectJournalDecade(decade) {
    return  {
        labels: data.journals.labels,
        datasets: [{ data: data.journals.values[decade], backgroundColor: data.journals.colors,}]
    }
}


function selectTypeDecade(type,decade) {
    const women = data.types.values[type][(decade-1900)/10]
    const men = 100 - women

    return  {
        labels: ['Men', 'Women'],
        datasets: [{ data: [men,women], backgroundColor: data.types.colors[type]}]
    }
}



export const Summary = {
    title: "JSTOR Authorship Data 1900-2009",
    page: "jstor",
    summary: <>
        <p>This data is from the JSTOR network dataset, with a special focus on philosophy journals. We isolate our
            analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million
            documents that either cited other JSTOR articles or were cited by other JSTOR articles.</p>
        <p> We examine the numbers and proportions of women authorships in philosophy journals for historical data
            collected from the JSTOR network dataset dating between 1900 and 2009. We define “authorships” as
            author-paper pairs, where multiple authors may co-author the same paper. </p>
    </>,
    graph: <Line
        height={50}
        width={50}
        data={constructDataSet("types")}
        options={{
            maintainAspectRatio: true, legend: {display: false,},
            title: { display: true,  text: 'Percent of Women Authorships over Time' }
        }}
    />
}

export default function(props) {
    const [decade, setDecade] = useState(2000);
    const [journalDecade, setJournalDecade] = useState(selectJournalDecade(2000));
    const [topDecade, setTopDecade] = useState(selectTypeDecade("Top",2000));
    const [nonTopDecade, setNonTopDecade] = useState(selectTypeDecade("NonTop",2000));
    const [intDecade, setIntDecade] = useState(selectTypeDecade("Int",2000));

    constructDataSet("aos")
    function updateYear(e){
        setDecade(e.target.value)
        setJournalDecade(selectJournalDecade(e.target.value))
        setTopDecade(selectTypeDecade("Top",e.target.value))
        setNonTopDecade(selectTypeDecade("NonTop",e.target.value))
        setIntDecade(selectTypeDecade("Int",e.target.value))
    }

    return <Layout>
        <h1>{Summary.title}</h1>
        <p>This data is from the JSTOR network dataset, with a special focus on philosophy journals. We isolate our
            analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million
            documents that either cited other JSTOR articles or were cited by other JSTOR articles.</p>


        <Row>
            <Col md={6} sm={12}>
                <h3>Percent of Women Authorships in {decade}s by Journal</h3>
                <HorizontalBar
                    data={journalDecade}
                    width={50}
                    height={100}
                    options={{
                        maintainAspectRatio: true,
                        legend: {display: false,},
                        scales: {xAxes: [{ticks: {min: 0, max: 100}}]}
                    }}
                />


            </Col>
            <Col  md={6}>

                <h3>Gender of Authorships in Top-Philosophy Journals in the {decade}s</h3>
                <Doughnut
                    data={topDecade}
                    options={{maintainAspectRatio: true,}}
                />

                <br/>
                <h3>Gender of Authorships in Non-Top Philosophy Journals in the {decade}s</h3>
                <Doughnut
                    data={nonTopDecade}
                    options={{maintainAspectRatio: true,}}
                />

                <br/>
                <h3>Gender of Authorships in Interdisciplinary Journals in the {decade}s</h3>
                <Doughnut
                    data={intDecade}
                    options={{maintainAspectRatio: true,}}
                />
            </Col>
        </Row>

        <strong>Selected Decade:</strong> {decade}s
        <input className="slider" type="range" id="volume" name="volume"
               min="1900" max="2000" defaultValue="2000"  step="10" onChange={updateYear}/>

        <br/>
        <br/>
        <h3>Percent of Women Authorships Over time</h3>
        <Line
            data={constructDataSet("types")}
            options={{maintainAspectRatio: true,}}
        />

        <br/>
        <br/>
        <Row>
            <Col md={6} sm={12}>
                <h3>Percent of Women Authorship by Area of Specialization in 2000s</h3>
                <Bar
                    data={constructDataSet("aos")}
                    width={50}
                    height={30}
                    options={{
                        maintainAspectRatio: true,
                        scales: {yAxes: [{ticks: {min: 0, max: 50}}]}
                    }}
                />
            </Col>
            <Col md={6} sm={12}>
                <h3>Percent of Women Authorship by Review Type in 2000s</h3>
                <Bar
                    data={constructDataSet("review")}
                    width={50}
                    height={30}
                    options={{
                        maintainAspectRatio: true,
                        scales: {yAxes: [{ticks: {min: 0, max: 50}}]}
                    }}
                />
            </Col>
        </Row>

            <br/><br/>
        <h2>Methods</h2>
        <p>We examine the numbers and proportions of women authorships in philosophy journals for historical data collected from the JSTOR network dataset dating between 1900 and 2009. We define “authorships” as author-paper pairs, where multiple authors may co-author the same paper. We use authorships because our dataset, like most large-scale bibliographic datasets, does not contain a fully disambiguated set of unique authors.  Because some examined articles are authored by more than one person, the number of women authors is somewhat greater than the number of unique articles with women authors.</p>

        <p>The analysis was further narrowed to 1.5 million documents where author gender was identifiable. In this study we distinguish authors by binary gender based on name. To determine the gender of authors, we used the top 1000 lists of gendered names, produced by the United States Social Security Administration to categorize authors by first name. We recognize that this may not reflect the self-identified gender of the individual. This decision was made due to the historical nature of this work, where getting self-identified gender is not possible, and to allow comparison to other works published on historical data. We are sensitive that this binary proscriptive division does not fully encompass the diversity in the discipline, and we are looking at ways of incorporating self-identified gender in future work.</p>

        <p>Authorship data was discarded when the author was listed by initials only, when the first name was common to both genders, and where the name was not on the lists. This may introduce a small bias in terms of undercounting women authors given that they may be more likely to rely on initials, but this accounted for only about 4% of articles, and we estimate that we undercount women authors by roughly 0.64%.</p>

        <p>For the current study, we selected journals from the JSTOR network dataset. The initial list of journals was selected by taking the intersection of lists of philosophy journals from the following sources: Thom Brooks (2011); Leiter Journal Ranking Survey (2015); BPA-APA Survey (2014); Andrew Cullison (2015); Brian Weatherson (2015). We identified 56 journals using this method. The data comprises 47,597 article entries for which we have author gender, with a corresponding 52,865 authorships. Out of these 7,304 are women authorships, and the remaining 45,561 authorships are men.</p>

        <p>In our set of authorships, the same individual may author multiple articles. By assuming that a unique first name and last name pair define a unique author in our data, our authorship data corresponds to 19,660 unique authors (3,789 women and 15,871 men). Each article may be authored by multiple individuals. In our data 3,899 (8%) of articles have more than one author, out of which 173 have multiple all women authors, 2,683 have all men authors, and 1,043 have mixed gender authors.  In our data, unique women authors publish an average of 1.9 papers while men authors publish an average of 2.8 papers.</p>

        <p>We grouped journals into three mutually exclusive categories. “#3182bd” journals comprise 18 of the 21 highly ranked philosophy journals listed in a recent survey of faculty perceptions of journal quality reported by Leiter (2013).  We consider 18 of the 21 Leiter ranked journals because only data for these journals were available from JSTOR. The subset comprises 23,204 article entries, with 2,265 total women authorships. Then, we visited individual journal websites and emailed journal editors as needed to establish two additional journal category categories. “#9ecae1” journals comprise 22 philosophy journals, which self-identify as philosophy-specific journals. The subset comprises 8,341 article entries, with 1,953 total women authorships. “#deebf7” journals comprise 16 journals self-identifying as #deebf7 journals with philosophical content. The subset comprises 15,409 article entries, with 2,519 total women authorships. We classified all journals in our dataset by sub-disciplines included and review type (see Appendix B and C for details).</p>

        <p>In our analysis, unless otherwise stated we use journal-year pair as the grouping for the data. On each journal-year pair we calculate the total proportion of women authorships as defined by the number of women authorships over the total authorships. We provide descriptive statistics of our data, and when possible model the data using generalized linear models (GLMs) to compare between variables. General linear models are a broad class of models, which can be used on data, such as ours, that do not have a normal distribution. As the data better conforms to a negative binomial distribution, in all cases we used this distribution family for generating the model. Note that negative binomial distributions are usually used for count data. When calculating proportions, we use an offset as the log of the number of authors. The statistics of this are outside of the scope of the paper, however, as a result, we can compute the proportions and not just the count of authorships.</p>

        <p>In our analysis, we compare the proportions of women authorships in philosophy journals to the proportions of women philosophy faculty in two ways. First, we compare the proportions of women authorships, grouped by journal category, to the proportions of women philosophy faculty.</p>

        <h2>Appendix: Area of Specialization</h2>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Key</th>
                <th>Area of Specialization</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>V</td>
                <td>Value Theory</td>
            </tr>
            <tr>
                <td>LEMM</td>
                <td>Language, Epistemology, Metaphysics, and Mind</td>
            </tr>
            <tr>
                <td>H</td>
                <td>Historical Philosophy and Specific Philosophical traditions (i.e. Feminist Philosophy)</td>
            </tr>
            <tr>
                <td>S</td>
                <td>Logic and Philosophy of Science</td>
            </tr>
            <tr>
                <td>G</td>
                <td>General Specialization</td>
            </tr>
            </tbody>
        </Table>

        <br/>
        <h2>Appendix: Area of Specialization by Journals</h2>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>AOS<br/><br/></th>
                <th>Journals <br/> Top Philosophy (T), Non-Top Philosophy (N), Interdisciplinary (I)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>V</td>
                <td>
                    Political Theory (I)<br/>
                    Ethics (T)<br/>
                    Journal of Medical Ethics<br/>
                    The Journal of Ethics<br/>
                    Polity (I)<br/>
                    The Review of Politics (I)<br/>
                    Business and Professional Ethics Journal (N)<br/>
                    Business Ethics Quarterly (I)<br/>
                    Ethical Theory and Moral Practice (N)<br/>
                    Harvard Law Review (I)<br/>
                    Law and Philosophy (I)<br/>
                    Philosophy and Public Affairs (N)<br/>
                    Public Affairs Quarterly (I)<br/>
                    The Journal of Aesthetics and Art Criticism<br/>
                    The Journal of Religious Ethics (N)<br/>
                </td>
            </tr>
            <tr>
                <td>LEMM</td>
                <td>
                    Erkenntnis (N)<br/>
                    Linguistics and Philosophy (N)<br/>
                    The Review of Metaphysics (N)<br/>
                    Synthese (N)<br/>
                    Journal of Philosophical Logic (N)<br/>
                </td>
            </tr>
            <tr>
                <td>H</td>
                <td>
                    Feminist Studies (I)<br/>
                    Isis (I)<br/>
                    The Journal of Speculative Philosophy (N)<br/>
                    The Pluralist (I)<br/>
                    Transactions of the Charles S. Peirce Society (N)<br/>
                    Apeiron (N)<br/>
                    Classical Philology (I)<br/>
                    Hypatia (N)<br/>
                    International Journal for Philosophy of Religion (N)<br/>
                    Journal of Nietzsche Studies (N)<br/>
                    Journal of the History of Ideas (I)<br/>
                    Philosophy East and West (N)<br/>
                    Phronesis (N)<br/>
                    Religious Studies (I)<br/>
                </td>
            </tr>
            <tr>
                <td>S</td>
                <td>
                    Studia Logica (I)<br/>
                    The Bulletin of Symbolic Logic<br/>
                    The Journal of Symbolic Logic<br/>
                    Philosophy of Science<br/>
                    The British Journal for the Philosophy of Science (T)<br/>
                </td>
            </tr>
            <tr>
                <td>G</td>
                <td>
                    Critical Inquiry<br/>
                    Inquiry<br/>
                    Proceedings of the Aristotelian Society<br/>
                    American Philosophical Quarterly<br/>
                    Analysis (T)<br/>
                    Canadian Journal of Philosophy (T)<br/>
                    Mind (T)<br/>
                    Nous (T)<br/>
                    Philosophical Issues<br/>
                    Philosophical Perspectives<br/>
                    Philosophical Studies<br/>
                    Philosophy (N)<br/>
                    Philosophy and Phenomenological Research (N)<br/>
                    The Journal of Philosophy (N)<br/>
                    The Monist (N)<br/>
                    The Philosophical Quarterly<br/>
                    The Philosophical Review (T)<br/>
                </td>
            </tr>
            </tbody>
        </Table>

        <br/>
        <h2>Appendix: Review Type</h2>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Review Process</th>
                <th>Journals</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Triple Anonymous</td>
                <td>
                    Analysis<br/>
                    Ethics<br/>
                    Journal of Medical Ethics<br/>
                    Mind<br/>
                    Nous<br/>
                    Philosophy and Phenomenological Research<br/>
                    The British Journal for the Philosophy of Science<br/>
                    The Philosophical Quarterly<br/>
                    The Philosophical Review<br/>
                </td>
            </tr>
            <tr>
                <td>Double  Anonymous</td>
                <td>
                    American Philosophical Quarterly<br/>
                    Apeiron<br/>
                    Business and Professional Ethics Journal<br/>
                    Business Ethics Quarterly<br/>
                    Canadian Journal of Philosophy<br/>
                    Classical Philology<br/>
                    Erkenntnis<br/>
                    Ethical Theory and Moral Practice<br/>
                    Feminist Studies<br/>
                    Harvard Law Review<br/>
                    Hypatia<br/>
                    Inquiry<br/>
                    International Journal for Philosophy of Religion<br/>
                    Isis<br/>
                    Journal of Nietzsche Studies<br/>
                    Journal of Philosophical Logic<br/>
                    Journal of the History of Ideas<br/>
                    Law and Philosophy<br/>
                    Linguistics and Philosophy<br/>
                    Philosophical Issues<br/>
                    Philosophical Perspectives<br/>
                    Philosophical Studies<br/>
                    Philosophy<br/>
                    Philosophy and Public Affairs<br/>
                    Philosophy East and West<br/>
                    Philosophy of Science<br/>
                    Phronesis<br/>
                    Political Theory<br/>
                    Polity<br/>
                    Public Affairs Quarterly<br/>
                    Religious Studies<br/>
                    Synthese<br/>
                    The Bulletin of Symbolic Logic<br/>
                    The Journal of Aesthetics and Art Criticism<br/>
                    The Journal of Ethics<br/>
                    The Journal of Philosophy<br/>
                    The Journal of Religious Ethics<br/>
                    The Journal of Speculative Philosophy<br/>
                    The Pluralist<br/>
                    The Review of Metaphysics<br/>
                    The Review of Politics<br/>
                    Transactions of the Charles S. Peirce Society<br/>
                </td>
            </tr>
            <tr>
                <td>Non-Anonymous</td>
                <td>
                    Critical Inquiry<br/>
                    Proceedings of the Aristotelian Society<br/>
                    Studia Logica<br/>
                    The Journal of Symbolic Logic<br/>
                    The Monist<br/>
                </td>
            </tr>
            </tbody>
        </Table>


    </Layout>
}
