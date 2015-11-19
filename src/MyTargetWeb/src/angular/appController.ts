import  pages  from './appSettup';

export default class appControllerClass {
    navigations = pages.filter((p) => p.isNavigation).map((p) => p.name );
}
