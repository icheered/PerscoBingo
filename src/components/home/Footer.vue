<template>
    <v-footer class="mt-5" absolute>
      <v-col class="text-center" cols="12">
        
        <v-btn text outlined> 
          <v-list-item class="custom-btn" href="https://github.com/icheered/PerscoBingo" target="_blank" hover>
            {{ new Date().getFullYear() }} - ICheered
            <v-icon right >fa-github</v-icon>
          </v-list-item>
        </v-btn>
        
      </v-col>
    </v-footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.custom-btn::before {
    color: transparent
}
</style>