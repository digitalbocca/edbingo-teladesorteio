<template lang="pug">
  .col
    .table-responsive
      span.text-center
        table.table.table-hover
          tbody
            tr.edb-no-top
              td.font-weight-bold B
              td(v-for="b in 15")
                span.badge.badge-pill.badge-success {{ b }}
            tr
              td.font-weight-bold I
              td(v-for="i in 15")
                span.badge.badge-pill.badge-success {{ i + 15 }}
            tr
              td.font-weight-bold N
              td(v-for="n in 15")
                span.badge.badge-pill.badge-success {{ n + 30 }}
            tr
              td.font-weight-bold G
              td(v-for="g in 15")
                span.badge.badge-pill.badge-success {{ g + 45 }}
            tr
              td.font-weight-bold O
              td(v-for="o in 15")
                span.badge.badge-pill.badge-success {{ o + 60 }}
</template>

<script>

  export default {
    name: 'Tabela'
  }

</script>

<style lang="sass">
  .edb-no-top
    border-top: medium solid white !important
</style>