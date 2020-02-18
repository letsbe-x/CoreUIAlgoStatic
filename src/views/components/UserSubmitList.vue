<template>
  <CCard>
    <CCardBody>
      <CDataTable
        class="mb-0 table-outline"
        hover
        :items="tableItems"
        :fields="tableFields"
        head-color="light"
        no-sorting
      >
        <td slot="level" class="text-center" slot-scope="{item}">
          <div class="c-avatar">
            <img :src="item.level.url" class="c-avatar-img" alt />
            <span class="c-avatar-status" :class="`bg-${item.level.status || 'secondary'}`"></span>
          </div>
        </td>
        <td slot="title" slot-scope="{item}">
          <div>{{item.title.name}}</div>
          <div class="small text-muted">
            <span>
              <template v-if="item.title.new">New</template>
              <template v-else>Recurring</template>
            </span>
            | Registered: {{item.title.registered}}
          </div>
        </td>
        <td slot="language" slot-scope="{item}" class="text-center">
          <CIcon :name="item.language.flag" height="25" />
        </td>
        <td slot="time" slot-scope="{item}">
          <div class="clearfix">
            <div class="float-left">
              <strong>{{item.time.value}}%</strong>
            </div>
            <div class="float-right">
              <small class="text-muted">{{item.time.period}}</small>
            </div>
          </div>
          <CProgress class="progress-xs" v-model="item.time.value" :color="color(item.time.value)" />
        </td>
        <td slot="memory" slot-scope="{item}">
          <div class="clearfix">
            <div class="float-left">
              <strong>{{item.memory.value}}%</strong>
            </div>
            <div class="float-right">
              <small class="text-muted">{{item.memory.period}}</small>
            </div>
          </div>
          <CProgress
            class="progress-xs"
            v-model="item.memory.value"
            :color="color(item.memory.value)"
          />
        </td>
        <td slot="status" slot-scope="{item}" class="text-center">
          <CIcon :name="item.status.icon" height="25" />
        </td>
        <td slot="activity" slot-scope="{item}">
          <div class="small text-muted">Last login</div>
          <strong>{{item.activity}}</strong>
        </td>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {};
</script>

<style>
</style>