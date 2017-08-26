<template>
  <div class="col">
    <div class="table-responsive">
      <span class="text-center">
        <table class="table table-hover">
          <tbody>
            <tr class="edb-no-top">
              <td class="font-weight-bold">B</td>
              <td v-for="b in 15">
                <span class="badge badge-pill badge-success">
                  {{b}}
                </span>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">I</td>
              <td v-for="i in 15">
                <span class="badge badge-pill badge-success">
                  {{i + 15}}
                </span>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">N</td>
              <td v-for="n in 15">
                <span class="badge badge-pill badge-success">
                  {{n + 30}}
                </span>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">G</td>
              <td v-for="g in 15">
                <span class="badge badge-pill badge-success">
                  {{g + 45}}
                </span>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">O</td>
              <td v-for="o in 15">
                <span class="badge badge-pill badge-success">
                  {{o + 60}}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  </div>
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