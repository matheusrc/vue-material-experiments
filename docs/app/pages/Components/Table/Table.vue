<example src="./examples/BasicTable.vue" />
<example src="./examples/TableCard.vue" />
<example src="./examples/FixedHeader.vue" />
<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.table.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Table</h2>

      <code-example title="Basic Table" :component="examples['basic-table']" />
    </div>

    <div class="page-container-section">
      <h2>Table within a card</h2>

      <code-example title="With sort options" :component="examples['table-card']" />
    </div>

    <div class="page-container-section">
      <h2>Fixed header</h2>

      <code-example title="Automatic Scrollbars" :component="examples['fixed-header']" />
    </div>

    <div class="page-container-section">
      <h2>Example</h2>

      <code-example title="Example" :component="examples['example']" />

      <api-item title="API - md-table">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Table',
    mixins: [examples]
  }
</script>
