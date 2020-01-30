# Example React Path Splitting

Concept here is that when a ui-component library is used by more than one project, those projects are then constrained by the functionality of the component, which must not change otherwise risk not working as a shared component. In occasional cases it may be fine to keep 99% of the component working the same, but require a slightly different view or service which it uses and it doesn't make sense to share these changes between both projects.

Example scenario:

Company Component has a container component which displays a list of information. The container is perfectly usable with the current functionality,
but the table displays too much or not enough of the information it is receiving to fit the specification. The whole container must be recreated to accomdate the view, along with services and other stores.

If it were possible to replace sub-containers which were used by the table, such as `TableHeader` and `TableRow` it would be possible to reconfigure the component to render differently with minimal amount of code changes and duplication across projects.

Below is an example of the code within this repo replacing a node_module found module with one found in src.

![Hello World](https://i.imgur.com/Q0ZK7pj.png)