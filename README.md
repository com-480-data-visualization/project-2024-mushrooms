# TODO:
3. Analysis: some code / histogram, groupby & count staffs

# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Qingyi HE | 353324 |
| Kai Lien | 370476 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

> *Notion: https://www.notion.so/Data-Visualization-729ab34b37ec42af81ec1b5e323177e9*
> *Colab: https://colab.research.google.com/drive/1r6TfL7NPU3GNvdljQVrPqL-P5TBA-N2k?authuser=0#scrollTo=5pyj_VWEzsvx*

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)), you could use also the DataSets proposed by the ENAC (see the Announcements section on Zulip).

For our project, we have selected the Mushroom dataset available on Kaggle (https://www.kaggle.com/datasets/vishalpnaik/mushroom-classification-edible-or-poisonous) as the primary dataset. This dataset provides extensive information on mushroom characteristics, classified as edible or poisonous. 

It includes various features such as **cap shape**, **cap color**, **habitat**, and **odor**, making it ideal for our visualization objectives. 

In addition to it, we also plan to explore some other mushroom related dataset such as [Pilzkalender](https://www.123pilze.de/pilzkalender_roehrlinge.html) for supplementary spatial and temporal information. 

#### Mushroom Dataset
| Field | Description |
| - | - |
| Class               | Indicates mushroom edibility (**poisonous=p, edible=e**) for classification (binary).             |
| Cap-Diameter        | Diameter of the mushroom cap in cm (metrical).                                                |
| Cap-Shape           | Shape of the mushroom cap, categorized as **bell (b)**, **conical (c)**, **convex (x)**, **flat (f)**, **sunken (s)**, **spherical (p)**, **others (o)** for any other shapes not listed explicitly. |
| Cap-Surface         | Texture of the mushroom cap surface, categorized as **fibrous (i)**, **grooves (g)**, **scaly (y)**, **smooth (s)**, **shiny (h)**, **leathery (l)**, **silky (k)**, **sticky (t)**, **wrinkled (w)**, **fleshy (e)**. |
| Cap-Color           | The color of the mushroom cap, with options such as brown, buff, gray, green, pink, purple, red, white, yellow, blue, orange, and black (nominal). |
| Does-Bruise-or-Bleed| Indicates whether the mushroom bruises or bleeds when injured (nominal).                      |
| Gill-Attachment     | How gills are attached to the stem, with options **adnate (a)**, **adnexed (x)**, **decurrent (d)**, **free (e)**, **sinuate (s)**, **pores (p)**, **none (f)**, **unknown (?)**. |
| Gill-Spacing        | Spacing between gills, categorized as **close (c)**, **distant (d)**, **none (f)**.                       |
| Gill-Color          | Color of the gills, matching the cap-color options (and **none=f**).                              |
| Stem-Height         | Height of the mushroom stem in cm (metrical).                                                 |

#### Mushroom Calendar(Pilzkalender)
| Field | Description |
| - | - |
| Name                       | Common names of the mushroom in German                     |
| Latein (wissenschaftlich)  | Scientific (Latin) name of the mushroom                    |
| Vorkommen                  | Habitat or typical environment where the mushroom is found |
| Wann                       | Season or time of year when the mushroom appears           |
| Speisewert                 | Edibility rating (with specific values indicating the degree of edibility) |

#### Preprocess
The Mushroom dataset is well-maintained and requires minimal preprocessing, mainly to address a few instances with data missing or format mistake, and to convert categorical attributes into a form suitable for visualization. 

The high quality and depth of this dataset allow us to focus more on the visualization aspects, with less concern about data cleaning.

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

The main goal of our visualization project is to visualize the relationship between different features of mushrooms and also relate these features to their classification as edible or poisonous. 
Our motivation stems from the potential to educate the public about mushroom safety. 
By creating an interactive visualization, we aim to allow users to explore the characteristics of mushrooms that determine their edibility. 
This project targets a broad audience, including biology students and also the general public with an interest in mushroom foraging. 
Through our visualization, we want to provide insights into the diversity of mushrooms and raise awareness about the importance of identifying mushrooms accurately. 

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

The initial exploratory data analysis will focus on examining the distribution of mushrooms across the edible and poisonous classifications and exploring the variance in their features. 
Visualization techniques like histograms, box plots, and scatter plots will be employed to uncover patterns, relationships, and outliers within the data. 
This exploratory phase is crucial for gaining a deeper understanding of the dataset and guiding the development of our visualization strategies.
It will be performed in the [Jupyter Note](milestone1/mushroom.ipynb). 

### Related work

> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

#### What others have already done with the data?
The UCI Mushroom Data Analysis (https://www.kaggle.com/code/aavigan/uci-mushroom-data) offers insights into previous analytical approaches to similar datasets. 

It thoroughly analyzed the dataset and presented a comprehensive exploration on the feature behind the data. 
Through data preprocessing, visual EDA using T-SNE, and the employment of Lasso regression 
it pinpoints all thoses significant variables.
The author also performed a cluster analysis via K-means and hierarchical clustering to estimate the mushroom species. 

<img src="figs-readme/UCI Mushroom Data/kmeans.png" />
<img src="figs-readme/UCI Mushroom Data/hierarchy.png" />

These analysis enable the dataset to be leveraged by machine learning for biological classification and beyond. 
The author took the KNN and Decision as examples and showed it's high classificatino accuracy. 
Furthermore, the amount of features make it possible to do unsupervised learning on this dataset. 

<img src="figs-readme/UCI Mushroom Data/tree.png"/>

#### Why is your approach original?

Previous endeavors have primarily utilized the mushroom dataset for classification tasks in machine learning. 

Our project mainly focuses on data visualization to provide educational insights on how to roughly classify a mushroom with human's eyes, rather than for predictive analysis. 


#### What source of inspiration do you take? 
- The animation and color schemes from [Wine101](https://github.com/com-480-data-visualization/com-480-project-onvagagner/tree/master), and the website it referred to: [Pocket](https://pudding.cool/2018/08/pockets/)
- 3000 Mushrooms - Book and App (https://www.123pilze.de/): A comprehensive guide to mushrooms, which serves as a reference for detailed mushroom descriptions and classifications.
- Mushroom Calendar (https://www.123pilze.de/DreamHC/Download/Pilzkalender.htm): Provides seasonal information on mushroom appearances, aiding in our visualization of temporal patterns.
- Swissfungi Map (https://www.wsl.ch/map_fungi/search): Displays geographical distributions of fungi in Switzerland, inspiring our geographical visualizations.
- Yunnan Geographical Distribution Study (https://www.researchgate.net/figure/Geographic-distribution-of-all-the-mushroom-samples-collected-in-markets-in-Yunnan_fig1_350972048): Provides a basis for understanding mushroom distribution in a specific region.

Our project aims to combine these elements into an interactive and educational visualization that stands out for its focus on public engagement and knowledge dissemination regarding mushroom safety and classification.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

