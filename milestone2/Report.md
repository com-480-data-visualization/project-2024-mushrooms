# Two A4 pages describing the project goal

## Sketches of Visualizations
1. Put the dataset visualization on the website (allow users to choose axis(1-2 feature, poisonous is always chosen), maybe the color of points to show the edibility)
2. Realize a little widget which illustrate the mushroom in real-time according to user's input (choose shape, slides size, etc.)

### Interactive Scatter Plot: 

Description: Users can select different mushroom features from dropdown menus to visualize how these attributes correlate with mushroom edibility. 

Sketch: Include a simple diagram showing a bubble plot with different features. The size of a bubble indicates the number of mushrooms with these features, and the color means edibility and toxicity. 
![fig1](https://github.com/com-480-data-visualization/project-2024-mushrooms/blob/master/milestone2/figs/IMG_9771.JPG)

Sketch: Include an interface with several bars allowing users to select mushrooms with desired features, such as cap diameter, color, size, etc.
![fig2](https://github.com/com-480-data-visualization/project-2024-mushrooms/blob/master/milestone2/figs/IMG_9773.JPG)

### Distribution Charts:

Description: Histograms or stacked area charts that display the distribution of mushrooms based on selected features like color, habitat, etc., segmented by edibility.

Sketch: Depict histograms segmented by color with controls for switching the feature.
![fig3](https://github.com/com-480-data-visualization/project-2024-mushrooms/blob/master/milestone2/figs/IMG_9770.JPG)

Sketch: A stacked area chart to visualize discrete features.
![fig4](https://github.com/com-480-data-visualization/project-2024-mushrooms/blob/master/milestone2/figs/IMG_9772.JPG)


### Geographical Map:

Description: A map showing locations where different types of mushrooms are commonly found, with filters for edibility and type.

Sketch: Map visualization with filters and hover-over effects for detailed information, this part is still under construction.


## Tools and Resources

1. **Data Handling and Preprocessing**: Python, Pandas

2. **Data Visualization**: D3.js for interactive web visualizations, Python (Matplotlib, Seaborn) for preliminary data exploration

3. **Web Development**: HTML, CSS, JavaScript for front-end; Flask/Django for backend if necessary

4. **Hosting/Deployment**: GitHub Pages or Heroku

## Relevant Lectures

1. Week 1-5 : Learned basic JavaScript syntax and D3.js framework for data visualization.

2. Week 5-7 : Learned design principles for data visualization, including color selection, layouts, and dos and don'ts.

3. Map : Since we are going to visualize the geographical distribution of mushrooms within Switzerland and its vicinity, it is important to learn how to draw a map that clearly conveys useful information to readers. We aim to study more about proportional symbol map so we can better demonstrate the relationship between features and living places.  

4. Storytelling : We want to catch reader's eyes by adding background stories for mushrooms and make visualizations more appealing.

## Project Breakdown

### Core Visualization (Minimal Viable Product)
A basic interactive scatter plot that allows users to select features and visualize the correlation with mushroom edibility.
(Also need to show there's a strong correlation between the mushrooms' appearance and their toxicity)

Distribution charts showing the basic statistical breakdown of mushroom features like color and shape.

### Extra Ideas (Enhancements)

Advanced filtering options in the scatter plot and distribution charts to allow users to drill down into specific subcategories.
(Visualize the filter with a mushroom painted aside, to give the user's a intuitive feel for the look of the mushroom.)

Integration of a geographical map that adds an additional layer of data visualization showing the natural habitats of different mushrooms. 


# Functional project prototype review
Prototype Requirements
- A basic website layout running locally or hosted online.
- Initial implementations of the scatter plot and distribution charts using dummy or preliminary real data.
- Basic navigation and user interface elements allowing users to interact with the visualizations.

