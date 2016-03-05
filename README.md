# &lt;kwc-table&gt;

> An advanced table component

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install kwc-table --save
```

Or [download as ZIP](https://github.com/successk/kwc-table/archive/master.zip).

## Usage

1 – Import polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

2 – Import custom element:

```html
<link rel="import" href="bower_components/kwc-table/kwc-table.html">
<link rel="import" href="bower_components/kwc-table/kwc-table-column.html">

<!-- For custom header or cell rendering -->
<link rel="import" href="bower_components/kwc-table/kwc-table-header.html">
<link rel="import" href="bower_components/kwc-table/kwc-table-cell.html">
```

3 – Start using it!

```html
<kwc-table data="[[data]]">
  <kwc-table-column header="Column 1" property="property1"></kwc-table-column>
  <kwc-table-column header="Column 2" property="property2"></kwc-table-column>
  <kwc-table-column>
    <kwc-table-header>
      <template>
        <!-- Custom header rendering, see **Custom templates** for more information -->
      </template>
    </kwc-table-header>
    <kwc-table-cell>
      <template>
        <!-- Custom cell rendering, see **Custom templates** for more information -->
      </template>
    </kwc-table-cell>
  </kwc-table-column>
  <!-- ... -->
</kwc-table>

<script>
  Polymer({
    properties: {
      data: {
        type: Array,
        value: [
          {
            property1: "value 1",
            property2: "value 2"
            //...
          },
          // ...
        ]
      }
    }
  })
</script>
```

## Options

### kwc-table

Attribute   | Options         | Default      | Description
---         | ---             | ---          | ---
`data`      | *Array*         | []           | Data to display in this table

### kwc-table-column

Attribute   | Options         | Default      | Description
---         | ---             | ---          | ---
`header`    | *String*        | `null`       | Title of column
`property`  | *String*        | `null`       | Property name from data for the column
`sortable`  | *Boolean*       | `false`      | If true, the use can click on the header to sort by this column. See **Sort** part for more information.

### kwc-table-header

Attribute   | Options         | Default      | Description
---         | ---             | ---          | ---
None        | -               | -            | -

### kwc-table-cell

Attribute   | Options         | Default      | Description
---         | ---             | ---          | ---
None        | -               | -            | -

## Children

### kwc-table

Selector | Description
---      | ---
*        | Table description (only `kwc-table-column` elements)

### kwc-table-column

Selector           | Description
---                | ---
`kwc-table-header` | If defined, use the child template to customize header rendering. See **Custom template** for more information.
`kwc-table-cell`   | If defined, use the child template to customize cell rendering. See **Custom template** for more information.

### kwc-table-header

Selector   | Description
---        | ---
`template` | If defined, use this template to customize header rendering. See **Custom template** for more information.

### kwc-table-cell

Selector   | Description
---        | ---
`template` | If defined, use this template to customize cell rendering. See **Custom template** for more information.

## Methods

### kwc-table

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
removeSort    | -            | -           | Remove the sort on the table

### kwc-table-column

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

### kwc-table-header

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

### kwc-table-cell

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

## Events

### kwc-table

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

### kwc-table-column

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

### kwc-table-header

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

### kwc-table-cell

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

## Styles

### kwc-table

The structure of this component follows the one of a table.
To style it, you can set CSS rules on `kwc-table ::content <element>`.

You can see classes used in this components below.

Name        | Description
---         | ---
`.sortable` | Applied on a `<th>` element when the column is sortable.
`.sorted`   | Applied on a `<th>` element when the column is sorted (up or down)
`.up`       | Applied on a `<th>` element when the column is sorted ascending
`.down`     | Applied on a `<th>` element when the column is sorted descending
`level<x>`  | Applied on a `<th>` element indicating the priority of the column when sorting (from 1 up to number of sortable columns)

You can see the [code of demo](index-kwc-table-show) for example of use

#### Deprecated styles – will be removed in version 1.x.x

Name                        | Default | Description
---                         | ---     | ---
`--kwc-table-table`         | {}      | Deprecated – use `kwc-table ::content table` instead
`--kwc-table-thead`         | {}      | Deprecated – use `kwc-table ::content thead` instead
`--kwc-table-thead-tr`      | {}      | Deprecated – use `kwc-table ::content thead tr` instead
`--kwc-table-thead-th`      | {}      | Deprecated – use `kwc-table ::content thead th` instead
`--kwc-table-tbody`         | {}      | Deprecated – use `kwc-table ::content tbody` instead
`--kwc-table-tbody-tr`      | {}      | Deprecated – use `kwc-table ::content tbody tr` instead
`--kwc-table-tbody-tr-odd`  | {}      | Deprecated – use `kwc-table ::content tbody tr:nth-of-type(odd)` instead
`--kwc-table-tbody-tr-even` | {}      | Deprecated – use `kwc-table ::content tbody tr:nth-of-type(even)` instead
`--kwc-table-tbody-td`      | {}      | Deprecated – use `kwc-table ::content tbody td` instead

### kwc-table-column

Name | Default | Description
---  | ---     | ---
None | -       | -

### kwc-table-header

Name | Default | Description
---  | ---     | ---
None | -       | -

### kwc-table-cell

Name | Default | Description
---  | ---     | ---
None | -       | -

## Sort

This component is able to sort data by one or several columns.
For this purpose, you need to set the `sortable` property (see **Options** part for more information).
Once set, the use just need to click on the header to sort the table by this column values.
The first time he click on the header, it will be sorted ascending, the second time descending.
When the user click on another `sortable` column header, the sort will be by this new column, then the previous one when there is two same values.

To remove the sort, you just need to call `removeSort` on `<kwc-table>` element.

See the demo by following instructions in **Development** part.

## Custom templates

This component provides a simple way to customize the render of headers and cells.

### Custom header

To customize the rendering of the header, declare a `<kwc-table-header>` with a `<template>`.
There is one parameter passed into this template:

* `column`: The column declaration `kwc-table-column` element

### Custom cell

To customize the rendering of the header, declare a `<kwc-table-cell>` with a `<template>`.
There is two parameters passed into this template:

* `value`: The value of `kwc-table-column.property`
* `row`: The current row

### Example

```html
<kwc-table-column header="My column" property="myProperty">
  <kwc-table-cell>
    <template>
      <!-- Display the property value inside a .my-class element. -->
      <span class="my-class">[[value]]</span>
    </template>
  </kwc-table-cell>
</kwc-table-column>

<kwc-table-column>
  <kwc-table-header>
    <template>
      <!-- Display an icon before the title -->
      <span class="icon-actions"></span> Actions
    </template>
  </kwc-table-header>
  <kwc-table-cell>
    <template>
      <!-- Display the a link from id of current row -->
      <a href="/my/url/with/[[row.id]]">My link</a>
    </template>
  </kwc-table-cell>
</kwc-table-column>
```

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1 – Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

```sh
$ npm install -g bower polyserve
```

2 – Install local dependencies:

```sh
$ bower install
```

3 – Start development server and open `http://localhost:8080/components/kwc-table/`.

```sh
$ polyserve
```

## History

For detailed changelog, check [Releases](https://github.com/successk/kwc-table/releases).

## License

MIT