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
```

3 – Start using it!

```html
<kwc-table data="[[data]]">
  <kwc-table-column header="Column 1" property="property1"></kwc-table-column>
  <kwc-table-column header="Column 2" property="property2"></kwc-table-column>
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

## Children

### kwc-table

Selector | Description
---      | ---
*        | Table description (only `kwc-table-column` elements)

### kwc-table-column

Selector | Description
---      | ---
None     | -

## Methods

### kwc-table

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

### kwc-table-column

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

## Styles

### kwc-table

Name                        | Default | Description
---                         | ---     | ---
`--kwc-table-table`         | {}      | Styles for table
`--kwc-table-thead`         | {}      | Styles for thead
`--kwc-table-thead-tr`      | {}      | Styles for tr in thead
`--kwc-table-thead-th`      | {}      | Styles for th in thead
`--kwc-table-tbody`         | {}      | Styles for tbody
`--kwc-table-tbody-tr`      | {}      | Styles for all tr in tbody
`--kwc-table-tbody-tr-odd`  | {}      | Styles for odd tr in tbody
`--kwc-table-tbody-tr-even` | {}      | Styles for event tr in tbody
`--kwc-table-tbody-td`      | {}      | Styles for all td in tbody

### kwc-table-column

Name | Default | Description
---  | ---     | ---
None | -       | -

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