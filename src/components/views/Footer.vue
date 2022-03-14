<template>
  <footer class="footer btn squared btn-info">
    <span>Copyright <strong>BRM-TEC</strong> © 2022-2022</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  border-radius: 0px !important;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
}
</style>
