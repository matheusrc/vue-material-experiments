<example src="./examples/Determinate.vue" />
<example src="./examples/Indeterminate.vue" />

<template>
  <page-container centered :title="$t('pages.progress.title')">
    <div class="page-container-section">
      <p>
        A linear progress indicator should always fill from 0% to 100% and never decrease in value.
        It should be represented by bars on the edge of a header or sheet that appear and disappear
      </p>
    </div>

    <div class="page-container-section">
      <!-- <h2>Determinate</h2> -->

      <code-example title="Determinate" :component="examples['determinate']" />
    </div>

    <div class="page-container-section">
      <!-- <h2>Indeterminate</h2> -->

      <code-example title="Indeterminate" :component="examples['indeterminate']" />
    </div>

    <div class="page-container-section">
      <api-item title="API - md-progress">
        <p>The following options can be applied to all buttons, even the FAB ones:</p>

        <api-table :headings="api.regular.props.headings" :props="api.regular.props.props" slot="props" />
        <api-table :headings="api.regular.classes.headings" :props="api.regular.classes.props" slot="classes" />
      </api-item>
    </div>

  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Progress',
  mixins: [examples],
  data: () => ({
    api: {
      regular: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-progress',
              type: 'Number',
              description: 'Set the progress bar size.',
              defaults: '0'
            },
            {
              name: 'md-indeterminate',
              type: 'Boolean',
              description: 'Set the progress bar indeterminate',
              defaults: 'false'
            }
          ]
        },
        classes: {
          headings: ['Name', 'Description'],
          props: [
            {
              name: 'md-accent',
              description: 'Make the Progress bar background red'
            },
            {
              name: 'md-warn',
              description: 'Make the Progress bar background orange'
            }
          ]
        }
      }
    }
  })
}
</script>
