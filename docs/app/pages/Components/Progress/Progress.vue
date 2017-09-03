<example src="./examples/Determinate.vue" />
<example src="./examples/Intermediate.vue" />

<template>
  <page-container centered :title="$t('pages.progress.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <!-- <h2>Determinate</h2> -->

      <code-example title="Determinate" :component="examples['determinate']" />
    </div>

    <div class="page-container-section">
      <!-- <h2>Intermediate</h2> -->

      <code-example title="Intermediate" :component="examples['intermediate']" />
    </div>

    <div class="page-container-section">
      <api-item title="API - md-progress">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Progress',
  mixins: [examples]
}
</script>
