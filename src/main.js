import {createRouteInfoCostTemplate} from './components/route-info-cost.js';
import {createMenuTemplate} from './components/menu.js';
import {createFiltersTemplate} from './components/filters.js';
import {createSortTemplate} from './components/sort.js';
import {createWaypointTemplate} from './components/waypoint';

const WAYPOINT_COUNTER = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
// const siteHeaderContainer = siteHeaderElement.querySelector('.page-body__container');
const tripMain = siteHeaderElement.querySelector(`.trip-main`);
const tripMainControls = tripMain.querySelector(`.trip-controls`);
const siteMainContainer = siteMainElement.querySelector(`.page-body__container`);

render(tripMain, createRouteInfoCostTemplate(), `afterbegin`);
render(tripMainControls, createMenuTemplate());
render(tripMainControls, createFiltersTemplate());
render(siteMainContainer, createSortTemplate());

for (let i = 0; i < WAYPOINT_COUNTER; i++) {
  render(siteMainContainer, createWaypointTemplate());
}
