<template>
  <CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" v-c-emit-root-event:toggle-sidebar-mobile />
    <CToggler in-header class="ml-3 d-md-down-none" v-c-emit-root-event:toggle-sidebar />
    <!-- <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="img/brand/coreui-vue-logo.svg"
      width="190"
      height="46"
      alt="CoreUI Logo"
    />-->
    <!-- <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard" exact>Dashboard</CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard" exact>Users</CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>Recommand</CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>-->
    <CHeaderNav class="mr-4">
      <!-- <v-flex align-self-center>
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="keydown '/' Focus"
          single-line
          append-icon="search"
          color="white"
          hide-details
          style="width:200px"
        ></v-text-field>
      </v-flex>-->
      <div id="search">
        <i class="fas fa-search" id="search-icon"></i>
        <form>
          <input type="text" id="search-input" name="search" autocomplete="off" />
        </form>
      </div>
    </CHeaderNav>
    <!-- <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>-->
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";

export default {
  name: "TheHeader",
  components: {
    TheHeaderDropdownAccnt
  }
};
</script>

<style>
#search {
  height: 80px;
  width: 80px;
  border-bottom: solid 5px transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  transition: 0.3s;
}

#search-input {
  height: 100%;
  width: 0px;
  font-size: 28px;
  font-weight: 600;
  background: none;
  color: #fff;
  border: none;
  outline: 0;
  visibility: hidden;
  transition: 0.3s;
}

#search.active {
  width: 350px;
  border-bottom: 5px solid white;
}

#search-input.active {
  width: 260px;
  margin-left: 16px;
  visibility: visible;
}
</style>