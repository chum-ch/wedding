<script setup>
import { RouterLink, RouterView } from "vue-router";
import CustomSpinner from '../components/customs/CustomSpinner.vue'
import WeddingForm from './WeddingForm.vue'
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
import axios from 'axios'
const isLoading = ref(false)
const dialogMessage = ref()
const msg = ref('មានបញ្ហា សូមព្យាយាមម្ដងទៀត')
const refToChildCustomTable = ref();
const refToChildCustomFileUpload = ref();
const refToChildProgressBar = ref();
const $api = inject("$api");
const tableDataWedding = ref([]);
const selectedWedding = ref([]);
const refToChildCustomDialogDeleteWedding = ref();
const refToChildWeddingForm = ref();
const columnsRoom = ref([
  {
    field: "Name",
    header: "ឈ្មោះ",
  },
  {
    field: "Village",
    header: "ភូមិ",
  },
  {
    field: "Money",
    header: "ថវិកា",
  },
]);
const openFileBrowser = () => {
  refToChildCustomFileUpload.value.openFileBrowser();
};
const clearFileSelected = () => {
  refToChildCustomFileUpload.value.clearFileSelected();
};
const processFileUpload = async (selectedFile) => {
  try {
    clearFileSelected();
    const formData = new FormData();
    formData.append("uploadedFile", selectedFile);
    let { data } = await $api.wedding.uploadFile(formData, { showLoading: false});
    if (data) {
      const { PROGRESSES_ID } = data;
      const URLRoomProgress = `/progresses/${PROGRESSES_ID}/sis-wedding-progresses`;
      refToChildProgressBar.value.checkProgress(URLRoomProgress);
    }
  } catch (error) {
    console.error("Error", error);
    // const { data } = error.response
    // if (typeof data === 'object' && Object.keys(data).length > 0) {
    //   $globalFunction.exportToExcel(data)
    // }
  }
};
const getListWedding = async () => {
  try {
    let { data } = await $api.wedding.listSisWedding();
    if (data && data.length > 0) {
      tableDataWedding.value = data;
    } else {
      tableDataWedding.value = [];
    }
  } catch (error) {
    console.log("Error list room", error);
  }
};
const deleteWedding = async (dataDelete) => {
  try {
    for (let item of dataDelete) {
      await $api.wedding.deleteSisWedding(item.WEDDING_ID);
    }
    closeDialogDeleteWedding();
    getListWedding();
  } catch (error) {
    console.error(error);
  }
};
const openDialogDeleteWedding = () => {
  refToChildCustomDialogDeleteWedding.value.openDialog();
};
const closeDialogDeleteWedding = () => {
  refToChildCustomDialogDeleteWedding.value.closeDialog();
  unSelectRowWedding();
};
const unSelectRowWedding = () => {
  refToChildCustomTable.value.unSelectedAllRows();
};
const getSelectionWedding = (data) => {
  selectedWedding.value = data;
};
const openDialogMessage = () => {
  dialogMessage.value.openDialog()
}
const closeDialogMessage = () => {
  dialogMessage.value.closeDialog()
}
const createWedding = () => {
  refToChildWeddingForm.value.openDialogWeddingForm()
}
onMounted( async() => {
  try {
    axios.interceptors.request.use((config) => {
      const hasKeyShowLoading = Object.keys(config).includes('showLoading')
      if (hasKeyShowLoading) {
        isLoading.value = config.showLoading
      } else {
        isLoading.value = true
      }
      return config
    })
    axios.interceptors.response.use(
      (response) => {
        isLoading.value = false
        return response
      },
      (error) => {
        if (error.response.status >= 400 && error.response.status <= 500) {
          const { message } = error.response.data;
          if (typeof message ==='string') {
            msg.value = message;
          }
          openDialogMessage()
          setTimeout(() => {
            closeDialogMessage()
          }, 10000) // Delay of 10000 milliseconds (10 seconds) before clearing progress
        }
        isLoading.value = false
        return Promise.reject(error)
      }
    )
  await getListWedding();
  } catch (error) {
    console.error('Error', error)
    isLoading.value = false
  }
})
</script>

<template>
    <CustomSpinner :isLoading="isLoading" />
  <CustomUploadFile
    @uploadedFile="processFileUpload"
    ref="refToChildCustomFileUpload"
    hidden
  />
  <CustomProgressBar
    ref="refToChildProgressBar"
    @completedProgress="getListWedding"
  />
  <CustomTable
    ref="refToChildCustomTable"
    :tableData="tableDataWedding"
    :columns="columnsRoom"
    :isShowFileMenu="true"
    :isHideEditBtn="true"
    @uploadedExcelFile="openFileBrowser"
    @update:selection="getSelectionWedding"
    @onClickDelete="openDialogDeleteWedding"
    @onClickCreate="createWedding"
  />

  <!-- Dialog delete room  -->
  <CustomDialog
    ref="refToChildCustomDialogDeleteWedding"
    @onClickDialogSubmit="deleteWedding(selectedWedding)"
    :danger="true"
    @onClickCloseDialog="closeDialogDeleteWedding()"
    :isDelete="true"
    :footerLabel="'លុប'"
    :modalHeader="'ការលុបអាពាហ៍ពិពាហ៍'"
  >
    <template #bodyDialog>
      <div class="text-center mt-4">
        អ្នកបានជ្រើសរើសចំនួន {{ selectedWedding.length }} ដើម្បីលុបចោល។.
      </div>
    </template>
  </CustomDialog>

  <!-- Dialog message  -->
  <CustomDialog
    ref="dialogMessage"
    :modalHeader="'ការមានបញ្ហា'"
    @onClickDialogSubmit="openDialogMessage"
    @onClickCloseDialog="closeDialogMessage"
    :secondary="true"
    :hideBtnSubmit="true"
  >
    <template #bodyDialog>
      <p class="text-center pt-3 text-red-500"> {{ msg }}
        <i class="pi pi-exclamation-triangle text-red-500 font-bold"></i>
      </p>
    </template>
  </CustomDialog>
  <!-- Child room form  -->
  <WeddingForm ref="refToChildWeddingForm" @update:wedding="getListWedding" />
</template>

<style>
</style>
