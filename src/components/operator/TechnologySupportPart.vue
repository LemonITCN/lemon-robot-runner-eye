<template>
  <div class="technology-support-part">
    <div class="technology-support-title-a">{{$t('app.company_name')}}</div>
    <div class="technology-support-title-b">{{$t('app.company_domain')}}</div>
  </div>
</template>

<script>
  export default {
    name: "CopyrightPart",
    data() {
      return {
        lang: 'operator.technologySupportPart.'
      }
    }
  }
</script>

<style scoped>
  .technology-support-part {
    color: #bbb;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .technology-support-title-a {
    margin-bottom: 2px;
  }

</style>