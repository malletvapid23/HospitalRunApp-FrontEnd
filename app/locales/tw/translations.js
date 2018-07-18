export default {
  admin: {
    address: {
      address1Label: '地址標籤1',
      address2Label: '地址標籤2',
      address3Label: '地址標籤3',
      address4Label: '地址標籤4',
      addressLabel: '地址',
      editTitle: '地址選項',
      include1Label: '包括標籤1',
      include2Label: '包括標籤2',
      include3Label: '包括標籤3',
      include4Label: '包括標籤4',
      messages: { addressSaved: '地址選項已成功儲存' },
      newTitle: '地址選項',
      titles: { optionsSaved: '選項已成功儲存' }
    },
    addressOptions: '地址選項',
    customForms: {
      buttons: {
        addField: '新增欄位',
        moveDown: '往上移',
        moveUp: '往下移',
        newForm: '＋ 新表格',
        preview: '預覽'
      },
      labels: {
        alwaysInclude: '總是包括',
        checkbox: '選項欄',
        colSpan: '欲展開之列數目',
        columns: '列',
        customForm: '自訂表格',
        dischargeReportFormType: '出院報告',
        expenseTo: '支付者',
        formName: '表格名稱',
        formType: '表格種類',
        header: '標題',
        incidentFormType: '事件',
        includeOtherOption: '包括其他選項',
        labFormType: '試驗',
        label: '標籤',
        newForm: '新增表格',
        opdReportFormType: '門診病人報告',
        operativePlanFormType: '手術計畫與報告',
        otherOptionLabel: '其他選項標籤',
        patientFormType: '病患',
        property: '屬性',
        radio: '單選按鈕',
        select: '複選單',
        socialworkFormType: '社區服務',
        text: '文字',
        textarea: '放大文字',
        visitFormType: '探訪'
      },
      messages: { formSaved: '{{name}}表格已成功儲存' },
      titles: {
        checkboxValues: '選項欄資料',
        customForms: '自訂表格',
        deleteForm: '刪除自訂表格',
        dropDownValues: '複選單資料',
        editCustomForm: '編輯自訂表格',
        fields: '欄位',
        formSaved: '表格成功儲存',
        headerValues: '標題文字',
        newCustomForm: '新增自訂表格',
        radioValues: '單選按鈕資料'
      }
    },
    header: {
      editTitle: '標題選項',
      facilityName: '設施名稱',
      headerLabel: '標題',
      headerLine1: '標題第1行',
      headerLine2: '標題第2行',
      headerLine3: '標題第3行',
      logoURL: '商標網址',
      messages: { headerSaved: '標題選項已成功儲存' },
      newTitle: '標題選項',
      titles: { optionsSaved: '選項已成功儲存' }
    },
    loadDb: '啟動數據庫',
    loaddb: {
      displayAlertMessage: '請選擇要開啟的檔案',
      displayAlertTitle: '選擇開啟檔案',
      editTitle: '啟動數據庫',
      errorDisplayAlertMessage: '無法啟動數據庫。問題：{{error}}',
      errorDisplayAlertTitle: '啟動時發生錯誤',
      progressMessage: '請等待數據庫啟動',
      progressTitle: '正在啟動數據庫'
    },
    lookup: {
      aisleLocationList: '庫存通道位置',
      alertImportListMessage: '請選擇要匯入的檔案.',
      alertImportListSaveMessage: '查找列表已成功匯入',
      alertImportListSaveTitle: '名單成功匯入',
      alertImportListTitle: '請選擇要匯入的檔案',
      alertImportListUpdateMessage: '查找列表已成功儲存',
      alertImportListUpdateTitle: '名單已儲存',
      anesthesiaTypes: '麻醉種類',
      anesthesiologists: '麻醉師',
      billingCategories: '建築類別',
      clinicList: '診所地點',
      countryList: '國家',
      cptCodeList: 'CPT 編碼',
      diagnosisList: '診斷',
      edit: { template: {
        addTitle: '新增數值',
        editTitle: '編輯數值',
        labelTitle: '數值',
        updateButtonTextAdd: '增加',
        updateButtonTextUpdate: '編輯'
      } },
      expenseAccountList: '費用帳戶',
      imagingPricingTypes: '影像價目類別',
      incidentDepartments: '事件部門',
      inventoryTypes: '庫存類型',
      labPricingTypes: '試驗定價類型',
      pageTitle: '查找列表',
      patientStatusList: '病患狀態表',
      physicianList: '醫師',
      procedureList: '程序',
      procedureLocations: '程序地點',
      procedurePricingTypes: '程序定價類型',
      radiologists: '放射科醫生',
      titles: { deleteLookupValue: '刪除數值' },
      unitTypes: '單位類型',
      vendorList: '供應商',
      visitLocationList: '探訪地點',
      visitTypes: '探訪類型',
      wardPricingTypes: '病房定價類型',
      warehouseList: '庫存地點'
    },
    lookupLists: '查找列表',
    roles: {
      capability: {
        addAllergy: '新增過敏',
        addAppointment: '新增預約',
        addBillingDiagnosis: '增加計費診斷',
        addCharge: '增加收費',
        addDiagnosis: '增加診斷',
        addImaging: '增加影像',
        addIncident: '增加事件',
        addIncidentCategory: '增加事件種類',
        addInventoryItem: '增加庫存項目',
        addInventoryPurchase: '增加庫存購買',
        addInventoryRequest: '增加庫存請求',
        addInvoice: '增加單據',
        addLab: '增加測試',
        addMedication: '增加藥物',
        addNote: '增加筆記',
        addOperationReport: '增加程序報告',
        addOperativePlan: '增加程序類型',
        addPatient: '增加病患',
        addPayment: '新增付款',
        addPhoto: '增加照片',
        addPricing: '新增價錢',
        addPricingProfile: '新增定價概況',
        addProcedure: '新增程序',
        addSocialwork: '新增社區工作',
        addVisit: '新增探訪',
        addVitals: '新增命脈資料',
        adjustInventoryLocation: '調整庫存位置',
        admin: '行政',
        admitPatient: '接納病患',
        appointments: '預約',
        billing: '計費',
        cashier: '出納員',
        completeImaging: '完成影像',
        completeLab: '完成測試',
        defineUserRoles: '定義用戶角色',
        deleteAppointment: '刪除預約',
        deleteDiagnosis: '刪除診斷',
        deleteImaging: '刪除影像',
        deleteIncident: '刪除事件',
        deleteIncidentCategory: '刪除事件類型',
        deleteInventoryItem: '刪除庫存項目',
        deleteInvoice: '刪除單據',
        deleteLab: '刪除測試',
        deleteMedication: '刪除藥物',
        deleteNote: '刪除筆記',
        deletePatient: '刪除病患',
        deletePhoto: '刪除照片',
        deletePricing: '刪除定價',
        deletePricingProfile: '刪除定價概況',
        deleteProcedure: '刪除程序',
        deleteSocialwork: '刪除社會工作',
        deleteVisit: '刪除拜訪',
        deleteVitals: '刪除命脈資料',
        dischargePatient: '讓病患出院',
        editInvoice: '編輯單據',
        fulfillInventory: '滿足庫存',
        fulfillMedication: '滿足藥物',
        generateIncidentReport: '生成事件報告',
        imaging: '影像',
        incident: '事件',
        inventory: '庫存',
        invoices: '單據',
        labs: '測試',
        listPaidInvoices: '顯示付清單據',
        loadDb: '載入數據庫',
        manageIncidents: '管理事件',
        medication: '藥物',
        overrideInvoice: '覆蓋單據',
        patientReports: '病患報告',
        patients: '病患',
        pricing: '價錢',
        updateConfig: '更新設置',
        visits: '探訪'
      },
      messages: { roleSaved: '{{roleName}}任務已成功儲存' },
      titles: { roleSaved: '任務已成功儲存' }
    },
    textReplacements: {
      createNew: '新增簡碼',
      existingRepl: '現有簡碼',
      noMatches: "'{{term}}' 沒有相對應的替代品",
      pageTitle: '簡碼',
      performExpand: "按 Enter 來用 '{{to}}' 取代 #{{from}}",
      possibleExpansions: '{{possible}} 可能的替代品',
      replDesc: '輸入文字時，這些快捷鍵讓您短的字句變成長的語句.',
      replaceWith: '用 ... 來取代',
      toReplace: '要取代之文字'
    },
    userRoles: '用戶角色',
    users: '用戶',
    visitForms: {
      labels: {
        followup: '跟進',
        form: '表格',
        initial: '初始',
        visitType: '探訪類型'
      },
      titles: { visitForms: '探訪表格' }
    },
    workflow: {
      admissionDepositLabel: '需要入院押金',
      clinicPrepaymentLabel: '需要診所付款',
      editTitle: '流程選項',
      followupPrepaymentLabel: '需要跟進付款',
      messages: { optionsSaved: '流程選項已成功儲存' },
      newTitle: '流程選項',
      outpatientImagingLabel: '需要門診病人影像付款',
      outpatientLabLabel: '需要門診病人測試付款',
      outpatientMedicationLabel: '需要門診病人藥物付款',
      titles: { optionsSaved: '選項已儲存' },
      workflowLabel: '流程'
    }
  },
  alerts: {
    errorExclamation: '發生錯誤!!!',
    pleaseWait: '請稍候',
    reportError: '生成報告時發生錯誤',
    warningExclamation: '注意!!!'
  },
  allergies: {
    buttons: { addAllergy: '新增過敏' },
    labels: {
      allergyName: '名稱',
      patientAllergy: '患者過敏'
    },
    titles: {
      addAllergy: '新增過敏',
      editAllergy: '編輯過敏'
    }
  },
  application: {
    messages: { sessionExpired: '請重新登入' },
    titles: { sessionExpired: '會話過期' }
  },
  appointments: {
    buttons: {
      newButton: '+ 新增預約',
      scheduleSurgery: '+ 預約手術'
    },
    calendarTitle: '預約行事曆',
    currentScreenTitle: '預約列表',
    editTitle: '更改預約',
    labels: {
      noLocation: '無地點',
      selectedStartingDate: '顯示在 ... 之後的預約'
    },
    messages: {
      appointmentSaved: '{{patient}}的預約已成功儲存',
      endTimeLaterThanStart: '請選擇一個開始時間之後的結束時間'
    },
    missed: '錯過的預約',
    newTitle: '新增預約',
    searchTitle: '搜尋預約',
    sectionTitle: '預約',
    thisWeek: '本週預約',
    titles: {
      appointmentSaved: '預約已儲存',
      editSurgicalAppointment: '更改手術預約',
      newSurgicalAppointment: '新增手術預約',
      theaterSchedule: '手術室時間表'
    },
    todayTitle: '本日預約'
  },
  billing: {
    alerts: {
      noInvoiceFound: '找無單據',
      noPricingItems: '找無定價項目',
      noPricingProfiles: '找無定價概況'
    },
    buttons: {
      addDeposit: '',
      addOverride: '新增覆蓋',
      createInvoice: '建立單據?',
      newInvoice: ''
    },
    currentScreenTitle: '',
    editInvoice: '',
    invoiceTitle: '',
    labels: {
      actualCharges: '實際收費',
      discountAmount: '折扣金額',
      discountPercentage: '折扣百分比',
      externalInvoiceNumber: '外部收據 #',
      hmoCom: 'HMO/COM',
      insurance: '國家保險',
      paymentProfile: '付款資料',
      paymentsDeposits: '付款/存款',
      pricingPanelOverrides: '定價資料覆蓋',
      pricingProfile: '定價資料',
      setFee: '設定費用'
    },
    messages: {
      flatDiscountMsg: '患者負責的基本費用已包含 {{currency}}{{discountAmount}} 的折扣.',
      flatFeeMsg: '患者負責 {{currency}}{{setFee}} 的基本費用.'
    },
    navigation: {
      allInvoices: '',
      billed: '',
      drafts: '',
      paid: ''
    },
    newInvoice: ''
  },
  buttons: {
    add: '新增',
    addItem: '新增項目',
    addLineItem: '新增訂單項目',
    addValue: '新增數值',
    addVisit: '新增探訪',
    allRequests: '全部要求',
    barcode: '條碼',
    cancel: '取消',
    clear: '清除',
    close: '關',
    complete: '完成',
    'delete': '刪除',
    dispense: '分發',
    edit: '編輯',
    filter: '篩選',
    fulfill: '履行',
    'import': '輸入',
    loadFile: '載入檔案',
    newItem: '+ 新增項目',
    newNote: '新增筆記',
    newRequest: '新增要求',
    newRequestPlus: '+ 新增要求',
    newUser: '新增使用者',
    ok: 'Ok',
    print: '列印',
    remove: '移除',
    returnButton: '返回',
    review: '檢閱',
    search: '搜尋',
    showAll: '顯示全部',
    showFewer: '顯示部分',
    update: '更新'
  },
  components: {
    chargesByTypeTab: { charges: '收費' },
    customFormManager: { buttons: { addForm: '新增表格' } },
    dateTimePicker: {
      amHour: '上午{{hour}}',
      midnight: '午夜',
      noon: '中午',
      pmHour: '下午{{hour}}'
    },
    imageUpload: { messages: { selectValidImageFile: '請選擇一個有效的照片' } },
    operativeProcedures: {
      buttons: { addProcedure: '新增程序' },
      labels: { procedure: '程序' },
      titles: { procedures: '程序' }
    },
    patientOrders: {
      buttons: {
        newImaging: '新增影像',
        newLab: '新增測試',
        newMedication: '新增藥物'
      },
      labels: {
        imagingOrderType: '影像',
        labOrderType: '測試',
        medicationOrderType: '藥物',
        orderType: '訂購類型'
      }
    },
    priceList: { charges: '{{pricingType}} 收費' },
    quantityCalc: { result: '{{targetUnit}} 總和：{{calculated}}' },
    quantityConv: {
      conversion: '一個 {{name}} 含有?',
      unit: '單位'
    },
    sortableColumn: { labels: { selectAll: '(全選)' } },
    takePhoto: {
      camera: '相機',
      how: '想如何加入相片',
      labels: {
        takeAPicture: '拍張照片',
        uploadAFile: '上傳檔案'
      },
      photo: '照片',
      preview: '預覽',
      takePhoto: '拍照片',
      uploadFile: '上傳檔案'
    },
    upcomingAppointments: {
      labels: {
        date: '日期',
        location: '地點',
        type: '種類',
        'with': '與'
      },
      titles: { upcomingAppointments: '將來預約' }
    }
  },
  customForms: {
    buttons: { addForm: '加入表格' },
    labels: { formToAdd: '要加入之表格' },
    titles: { addCustomForm: '加入自訂表格' }
  },
  dashboard: {
    needs_user_setup: '我們建議您建立使用者帳戶',
    standalone_welcome: "<h4>感謝您下載 HospitalRun. </h4><p>您正在使用 HospitalRun 的獨立模式. 這個模式支援多個使用者在一台電腦. 這對於下列是理想的:</p><ul><li>評估 HospitalRun 以開發伺服器.</li><li>使用平台來支援僅需單一設備(電腦)的診所.</li></ul><p>如果您'考慮架構一個數台設備(電腦)的HospitalRun, 我們 <a href=\"https://github.com/HospitalRun/hospitalrun-frontend/issues/1048\" target=\"_blank\">正在試著開發功能</a> 讓您從這單一設置升級到一般的雲端/伺服器設置.</p>",
    title: '歡迎來到 HospitalRun!'
  },
  dates: {
    'long': '{{years}} 年 {{months}} 月 {{days}} 日',
    longOmitDays: '{{years}} 年 {{months}} 月',
    longOmitDaysPlural: '{{years}} 年 {{months}} 月',
    longOmitDaysYears: '{{months}} 月',
    longOmitYears: '{{months}} 月 {{days}} 日',
    longPlural: '{{years}} 年 {{months}} 月 {{days}} 日',
    'short': '{{years}}年 {{months}}月 {{days}}日',
    shortOmitYears: '{{months}}月 {{days}}日'
  },
  diagnosis: {
    labels: {
      activeDiagnosis: '現行診斷',
      date: '日期',
      diagnosis: '診斷',
      secondaryDiagnosis: '次要診斷'
    },
    titles: {
      addDiagnosis: '新增診斷',
      editDiagnosis: '編輯診斷'
    }
  },
  errors: {
    accepted: '必須要接受',
    blank: '不能空白',
    confirmation: '不符合 {{attribute}}',
    empty: '不能空白',
    equalTo: '必須等於 {{count}}',
    even: '必須是偶數',
    exclusion: '已保存',
    greaterThan: '必須大於 {{count}}',
    greaterThanOrEqualTo: '必須大於或等於 {{count}}',
    inclusion: '不在名單內',
    invalid: '不符合要求',
    invalidNumber: '不是有效數字',
    lessThan: '必須小於 {{count}}',
    lessThanOrEqualTo: '必須小於或等於 {{count}}',
    notANumber: '不是一個數字',
    notAnInteger: '必須是一個整數',
    odd: '必須是奇數',
    otherThan: '不能等於 {{count}}',
    present: '必須是空白',
    result: '請先輸入一個結果',
    tooLong: '字數太長 (不能超過 {{count}} 字數)',
    tooShort: '字數太短 (不能低於 {{count}} 字數)',
    wrongLength: '字數不對 (必須等於 {{count}} 字數)'
  },
  headings: { chargedItems: '收費項目' },
  imaging: {
    alerts: {
      completedMessage: '影像要求已完成',
      completedTitle: '影像要求完成',
      savedMessage: '影像要求已儲存',
      savedTitle: '影像要求已儲存'
    },
    buttons: { newButton: '+ 新增影像' },
    labels: {
      addNewVisit: '--新增探訪--',
      completedBy: '完成者',
      radiologist: '放射科醫師',
      requestedNotes: '要求的筆記',
      resultNotes: '結果筆記'
    },
    messages: { noCompleted: '找不到已完成的項目' },
    pageTitle: '影像要求',
    sectionTitle: '影像',
    titles: {
      completedImaging: '已完成影像',
      editTitle: '編輯影像要求',
      newTitle: '新增影像要求'
    }
  },
  incident: {
    buttons: {
      add: '新增',
      addForm: '+ 新增表格',
      addItem: '新增表格',
      cancel: '取消',
      'delete': '刪除',
      download: '下載',
      edit: '編輯',
      'export': '輸出報告',
      generateRep: '生成報告',
      newAttachment: '+ 新增附件',
      newCategory: '+ 新增類型',
      newIncident: '+ 新增事件',
      newNote: '+ 新增筆記'
    },
    labels: {
      actions: '作用',
      addedBy: '由...添加',
      category: '類型',
      categoryItem: '類型表格',
      date: '日期',
      dateRecorded: '紀錄日期',
      department: '部門',
      description: '事件描述',
      endDate: '結束日期',
      givenBy: '由...提供',
      howToAddAttachment: '您想如何增加附件?',
      incidentDate: '事件日期',
      incidentId: '事件 ID',
      item: '項目',
      lastUpdated: '上一次更新',
      note: '筆記',
      patientId: '患者 Id',
      patientImpacted: '影響患者',
      reportType: '報告種類',
      reportedBy: '由...報告',
      reportedDate: '報告日期',
      reportedTo: '事件已報告給 (Full Name)',
      sentinelEvent: '突發事件',
      startDate: '開始日期',
      status: '狀態',
      statusActive: '現行',
      statusClosed: '完成',
      statusFollowup: '跟進',
      statusReported: '已報告',
      title: '標題',
      total: '總和',
      updatedBy: '由...更新'
    },
    messages: {
      attachmentFileRequired: '儲存附件前請先上傳檔案或拍張照片',
      createNew: '新增事件?',
      createNewIncidentCategory: '新增事件類型?',
      fillIn: '填入上述選項以計算分數',
      incidentCategorySaved: '{{name}} 類型已成功儲存.',
      noClosedIncidents: '找不到已完成的事件.',
      noIncidentCategoriesFound: '找不到事件類型.',
      noIncidents: '找不到事件.',
      saved: '事件報告已成功儲存.',
      selectExistingPatient: '請選擇一個現有的患者或不要填寫此字段.'
    },
    titles: {
      addAttachment: '加入附件',
      addCategoryItem: '加入類型項目',
      addNote: '加入筆記',
      attachments: '附件',
      closed: '已完成事件',
      current: '當前',
      deleteAttachment: '刪除附件',
      deleteIncident: '刪除事件',
      deleteIncidentCategory: '刪除事件類型',
      deleteItem: '刪除項目',
      deleteNote: '刪除筆記',
      editAttachment: '編輯附件',
      editIncident: '編輯事件',
      editIncidentCategory: '編輯事件類型',
      editNote: '編輯筆記',
      general: '一般信息',
      history: '歷史',
      incidentCategories: '事件類型',
      incidentCategoryItem: '事件類型項目',
      incidentCategoryName: '事件類型名稱',
      incidentCategorySaved: '事件類型已儲存',
      incidentSaved: '事件已儲存',
      incidents: '事件',
      incidentsByCategory: '按類型顯示事件',
      incidentsByDepartment: '按部門顯示事件',
      newIncident: '新增事件',
      newIncidentCategory: '新增事件類型',
      notes: '筆記',
      reports: '報告'
    }
  },
  inventory: {
    edit: {
      cost: '單位價:',
      delivered: '傳遞給:',
      location: '調整地點:',
      prescription: '處方給:',
      pulled: '來源:',
      quantity: '完成數量:',
      reason: '原因:',
      returned: '患者給回:',
      transferredFrom: '從...轉來:',
      transferredTo: '轉去:'
    },
    labels: {
      action: '行動',
      add: '加入',
      addAdjustmentType: '加入',
      adjust: '調整',
      adjustmentDate: '調整日期',
      adjustmentFor: '為...調整',
      adjustmentType: '調整種類',
      aisle: '通道',
      aisleLocation: '通道地點',
      allInventory: '全部清單',
      allItems: '全部項目',
      availableQuantity: '{{quantity}} 可用',
      billTo: '記帳到',
      consumePurchases: '消費購買',
      consumptionRate: '消費率',
      cost: '費用',
      costPerUnit: '單位價',
      crossReference: '交叉引用',
      currentQuantity: '現前數量',
      dateCompleted: '完成日期',
      dateEffective: '生效日期',
      dateEnd: '結束日期',
      dateReceived: '收到日期',
      dateStart: '開始日期',
      dateTransferred: '轉移日期',
      daysLeft: '剩餘天數',
      deleteItem: '刪除項目',
      deliveryAisle: '發送通道',
      deliveryLocation: '發送地點',
      details: '細節',
      distributionUnit: '分配單位',
      editItem: '編輯項目',
      expense: '記帳到',
      expirationDate: '截止日期',
      fulfillRequest: '實現需求',
      fulfillRequestNow: '現在實現需求',
      gift: '禮物',
      giftInKindNo: 'N',
      giftInKindYes: 'Y',
      giftUsage: '禮物用途',
      inventoryConsumed: '庫存消耗',
      inventoryItem: '庫存項目',
      inventoryObsolence: '庫存報廢',
      invoiceItems: '單據項目',
      invoiceLineItem: '單據單項',
      invoiceNumber: '單據號碼',
      item: '項目',
      itemNumber: '項目號碼',
      items: '項目',
      location: '地點',
      locations: '地點',
      markAsConsumed: '標記為已消耗',
      name: '名稱',
      newItem: '新增項目',
      originalQuantity: '原本數量',
      print: '列印',
      printBarcode: '列印條碼',
      printer: '列印機',
      pullFrom: '從...拉入',
      purchaseCost: '購買價格',
      purchaseInfo: '購買資料',
      purchases: '購買',
      quantity: '數目 ({{unit}})',
      quantityAvailable: '可提供之數目',
      quantityOnHand: '現有數目',
      quantityRequested: '要求數目',
      rank: '級別',
      reason: '原因',
      remove: '移除',
      removeAdjustmentType: '移除',
      reorderPoint: '訂貨點',
      requestedItems: '要求項目',
      returnAdjustmentType: '退回',
      returnToVendorAdjustmentType: '退回給供應商',
      salePricePerUnit: '銷售單位價',
      save: '儲存',
      serialNumber: '序列號',
      total: '總和',
      totalCost: '總價碼',
      totalReceived: '總收入: {{total}}',
      transaction: '交易',
      transactions: '交易',
      transfer: '調動',
      transferFrom: '從...調動',
      transferTo: '調動到目的地',
      transferToAisle: '調動到通道地點',
      unit: '單位',
      unitCost: '單位價',
      vendor: '供應商',
      vendorItemNumber: '供應商項目編號',
      writeOffAdjustmentType: '註銷',
      xref: '外部參照'
    },
    messages: {
      adjust: '請調整適當地區的數目以解釋誤差 {{difference}}.',
      createRequest: '加入新需求？',
      itemNotFound: '找不到庫存項目 <strong>{{item}}</strong>.<br>如果要加入新的庫存項目, 請填入以下資料.<br>或選擇取消以返回.',
      loading: '載入交易...',
      noItems: '找無項目.',
      noRequests: '找無要求.',
      purchaseSaved: '庫存購買已成功儲存.',
      quantity: '總數目 <strong>({{quantity}})</strong> 不吻合地點的總數目 <strong>({{locationQuantity}})</strong>.',
      removeItem: '確定要從庫存中移除此項目？',
      removeItemRequest: '確定要從要求中移除此項目？',
      requestFulfilled: '庫存要求已完成.',
      requestUpdated: '庫存要求已更新.',
      warning: '加入前請填入必要的欄位 (有 * 標註) 並更正錯誤.'
    },
    reports: {
      adjustment: '詳細的調整',
      daysSupply: '庫存能支援天數',
      expenseDetail: '詳細的費用',
      expenseSum: '費用概要',
      expiration: '截止日期',
      'export': '輸出報告',
      fields: '要包括之欄位',
      finance: '財政概要',
      generate: '生成報告',
      invLocation: '按地點顯示庫存',
      invValuation: '庫存計價',
      purchaseDetail: '購買詳細資料',
      purchaseSum: '購買概要',
      reportType: '報告種類',
      rows: {
        adjustments: '調整',
        adjustmentsTotal: '總調整',
        balanceBegin: '初期結餘',
        balanceEnd: '最終結餘',
        category: '類別',
        consumed: '已消耗',
        consumedGik: '已消耗GiK',
        consumedGikTotal: '已消耗GiK總和',
        consumedPuchases: '已消耗購買',
        consumedPurchasesTotal: '已消耗購買總和',
        consumedTotal: '已消耗總和',
        errInFinSum: '生成財政概況報告時發生錯誤: ',
        errInFindPur: '依購買搜尋庫存項目時發生錯誤: ',
        errInFindReq: '依要求搜尋庫存項目時發生錯誤: ',
        expensesFor: '...的費用: ',
        noAccount: '(沒有帳戶)',
        subtotal: '小計: ',
        subtotalFor: '小計：{{category}} - {{account}}: ',
        total: '總和: ',
        totalFor: '{{var}}總和: ',
        totalPurchases: '購買總和',
        transfer1: '{{quantity}}來自{{location}}',
        trasnfer2: '從: {{source}} 到: {{target}}'
      },
      stockTransferDetail: '庫存傳遞詳細資料',
      stockTransferSum: '庫存傳遞概要',
      stockUsageDetail: '詳細庫存使用資料',
      stockUsageSum: '庫存使用概要',
      titleDateRange: '{{name}} 報告 {{startDate}} - {{endDate}}',
      titleSingleDate: '{{name}} 報告 {{date}}'
    },
    titles: {
      addPurchase: '加入購買',
      addRequest: '新增需求',
      adjustment: '調整',
      editPurchase: '編輯購買',
      editRequest: '編輯需求',
      inventoryItem: '新增庫存項目',
      inventoryReport: '庫存報告',
      purchaseSaved: '庫存購買已儲存',
      quickAddTitle: '新增庫存項目',
      removeItem: '移除項目',
      requestFulfilled: '需求已滿足',
      requestUpdated: '需求已更新',
      transfer: '搬遷項目',
      warning: '警告!!!!!'
    }
  },
  labels: {
    action: '行動',
    actions: '行動',
    addNewOutpatientVisit: '--加入門診病人探訪--',
    address: '地址',
    age: '年齡',
    allDay: '整天',
    allItems: '所有項目',
    amount: '數目',
    anesthesia: '麻醉',
    assisting: '助理',
    balanceDue: '餘額到期',
    billDate: '收費日期',
    billTo: '跟...收費',
    category: '類別',
    completed: '已完成',
    country: '國家',
    cptcode: 'CPT 代碼',
    creditTo: '歸於',
    currencySymbol: '$',
    date: '日期',
    dateCompleted: '完成日期',
    dateOfBirth: '出生年月日',
    dateOfBirthShort: '生日',
    datePaid: '付款日期',
    dateRequested: '要求的日期',
    'delete': '刪除',
    deleteRequest: '刪除要求',
    deleteUser: '刪除使用者',
    department: '部門',
    description: '描述',
    discount: '折扣',
    displayName: '顯示名稱',
    docRead: '已讀文件',
    docWritten: '已填文件',
    edit: '編輯',
    editUser: '編輯使用者',
    email: '電子郵件',
    endDate: '結束日期',
    endTime: '結束時間',
    excess: '過量',
    expenseTo: '由...付費',
    fileLoadSuccessful: '成功載入檔案',
    fileName: '檔案名稱',
    fileToLoad: '檔案載入',
    from: '來自',
    fulfill: '實現',
    fulfillRequest: '實現需求',
    fulfillRequestNow: '現在實現需求',
    fulfilled: '已實現',
    grandTotal: '累計',
    id: 'Id',
    imageOrders: '圖像訂製',
    imagingType: '影像種類',
    importFile: '載入檔案',
    invoiceId: '單據ID',
    labOrders: '指定試驗',
    lineItems: '訂單項目',
    loading: '正在載入',
    location: '地點',
    lookupType: '查找種類',
    medication: '藥物',
    name: '名稱',
    newItem: '+ 新增項目',
    newUser: '新增使用者',
    note: '筆記',
    notes: '筆記',
    number: '數字',
    on: '上',
    password: '密碼',
    patient: '患者',
    payments: '付款',
    physician: '醫師',
    prescriber: '處方師',
    prescription: '處方',
    prescriptionDate: '處方日期',
    price: '價格',
    print: '列印',
    procedures: '程序',
    provider: '提供者',
    pullFrom: '從...拉入',
    quantity: '數目',
    remarks: '備註',
    requestedBy: '要求者',
    requestedOn: '要求的日期',
    requests: '要求',
    result: '結果',
    results: '結果',
    role: '角色(任務)',
    search: '搜尋',
    sex: '性別',
    startDate: '開始日期',
    startTime: '開始時間',
    status: '狀態',
    takenBy: '由...採取',
    to: '給',
    total: '總和',
    type: '種類',
    userCanAddNewValue: '使用者可加入數值',
    username: '用戶名',
    value: '數值',
    view: '檢視',
    visit: '探訪',
    'with': '與'
  },
  labs: {
    alerts: {
      requestCompletedMessage: '測試要求已完成.',
      requestCompletedTitle: '測試要求已完成',
      requestSavedMessage: '測試要求已儲存.',
      requestSavedTitle: '測試要求已儲存'
    },
    buttons: { newButton: '+ 新增測試' },
    completedTitle: '已完成的測試',
    deleteTitle: '刪除要求',
    editTitle: '編輯測試要求',
    labels: {
      addNewVisit: '--加入新探訪--',
      labType: '測試種類'
    },
    messages: {
      createNewRecord: '加入新紀錄?',
      noCompleted: '找無已完成的項目.',
      noItemsFound: '找無測試.'
    },
    newTitle: '新增測試要求',
    requestsTitle: '測試要求',
    sectionTitle: '測試'
  },
  languageName: '繁體中文',
  loading: {
    messages: {
      '0': '飛行最快的蝴蝶可以達到每小時12英里. 有些飛蛾能達到每小時25英里的飛行速度!',
      '1': '貓頭鷹是唯一能識別藍色的鳥類.',
      '2': '貓可以發出超過一百種聲音，狗只能發出十種.',
      '3': '人類說話時運用了72個不同的肌肉.',
      '4': '非洲上的語言超過一千種.',
      '5': 'Erythrophobe 這個詞形容一個容易臉紅的人.',
      '6': '世上最常見的恐懼症是怕痛的恐懼.',
      '7': '當您站立不動的時候，您的身體運用了300個肌肉來平衡自己.',
      '8': '特定青蛙能在被結凍又解凍後繼續生存.',
      '9': '人體的眼睛從出生就保持同樣的大小, 但鼻子和耳朵會一直持續成長.',
      '10': '舌頭是您體內唯一僅附在最後端的肌肉.',
      '11': '駱駝有三個眼皮來防護風吹砂.'
    },
    progressBar: { progress: '{{progressBarValue}}% 完成' }
  },
  login: {
    labels: {
      password: '密碼',
      signIn: '登入',
      username: '用戶名'
    },
    messages: {
      error: '用戶名或密碼不正確.',
      offlineError: '離線時無法登入. 請連上網路後再試.',
      signIn: '請登入'
    }
  },
  medication: {
    alerts: {
      fulfilledTitle: '藥物要求完成',
      returnedMessage: '藥物已標記為退還.',
      returnedTitle: '退還藥物',
      savedMessage: '藥物紀錄已儲存.',
      savedTitle: '藥物要求已儲存'
    },
    buttons: {
      dispenseMedication: '發放配藥',
      newButton: '+ 新增要求',
      returnMedication: '退還藥物'
    },
    labels: {
      adjustmentDate: '調整日期',
      creditToAccount: '歸於...帳戶',
      quantityDispensed: '分配數量',
      quantityDistributed: '分發數量',
      quantityRequested: '要求數量',
      quantityToReturn: '要還的數量',
      refills: '充值',
      returnAisle: '退還通道',
      returnLocation: '退還地點',
      returnReason: '退還原因/備註'
    },
    messages: { createNew: '新增藥物要求?' },
    pageTitle: '藥物要求',
    returnMedication: '退還藥物',
    sectionTitle: '藥物',
    titles: {
      completedMedication: '完成藥物',
      editMedicationRequest: '編輯藥物要求',
      newMedicationRequest: '新增藥物要求'
    }
  },
  messages: {
    createNewRecord: '建立新紀錄?',
    createNewUser: '建立新使用者?',
    'delete': '確定要刪除 {{name}}?',
    delete_plural: '確定要刪除這些 {{name}}?',
    delete_singular: '確定要刪除 {{name}}?',
    forAuthorizedPersons: '這報告只提供給特定授權人.',
    newPatientHasToBeCreated: '必須建立一個新的患者...請稍候..',
    noHistoryAvailable: '沒有歷史.',
    noItemsFound: '找無項目.',
    noNotesAvailable: '沒有其他的其他的臨床報告可提供給此次探訪.',
    noUsersFound: '找無使用者.',
    onBehalfOf: '代表',
    reportError: '生成報告時發生錯誤. 請通報錯誤給系統管理員.',
    requiredFieldsCorrectErrors: '加入前請填入必要的欄位 (有 * 標註) 並更正錯誤.',
    saveActionException: '嘗試儲存時發生錯誤: {{message}}',
    sorry: '抱歉，發生錯誤...',
    userHasBeenSaved: '使用者已儲存.',
    userSaved: '使用者已儲存'
  },
  models: {
    appointment: {
      labels: {
        allDay: '整天',
        appointmentDate: '日期',
        appointmentType: '種類',
        endDate: '結束日期',
        location: '地點',
        notes: '筆記',
        patient: '患者',
        provider: '與',
        startDate: '開始日期',
        status: '狀態',
        type: '種類'
      },
      names: {
        plural: '預約',
        singular: '預約'
      }
    },
    attachment: { names: {
      plural: '附件',
      singular: '附件'
    } },
    form: { names: {
      plural: '表格',
      singular: '表格'
    } },
    imaging: {
      names: '影像',
      request: {
        plural: '影像要求',
        singular: '影像要求'
      }
    },
    incident: { names: {
      plural: '事件',
      singular: '事件'
    } },
    item: { names: {
      plural: '項目',
      singular: '項目'
    } },
    lab: {
      names: {
        plural: '測試',
        singular: '測試'
      },
      request: {
        plural: '測試要求',
        singular: '測試要求'
      }
    },
    medication: {
      names: {
        plural: '藥物',
        singular: '藥物'
      },
      request: {
        plural: '藥物要求',
        singular: '藥物要求'
      }
    },
    note: { names: {
      plural: '筆記',
      singular: '筆記'
    } },
    patient: {
      labels: { name: '名稱' },
      names: { singular: '患者' }
    },
    procedure: { names: {
      plural: '程序',
      singular: '程序'
    } },
    user: { names: {
      plural: '使用者',
      singular: '使用者'
    } },
    visit: { names: {
      plural: '探訪',
      singular: '探訪'
    } },
    vital: { names: {
      plural: '命脈資料',
      singular: '命脈資料'
    } }
  },
  navigation: {
    about: '關於HospitalRun',
    actions: {
      login: '登入',
      logout: '登出',
      selectLanguage: '選擇語言'
    },
    administration: '行政',
    billing: '計費',
    imaging: '影像',
    incident: '事件',
    inventory: '庫存',
    labs: '測試',
    medication: '藥物',
    messages: { logoutFailed: '現在無法登出. 離線時無法登出.' },
    patients: '患者',
    scheduling: '調度',
    subnav: {
      actions: '動作',
      addAppointment: '新增預約',
      addressFields: '地址欄位',
      admittedPatients: '收入患者',
      appointmentSearch: '搜尋預約',
      appointmentsCalendar: '預約行事曆',
      appointmentsThisWeek: '本週預約',
      cashier: '收銀員',
      completed: '已完成',
      currentIncidents: '現行事件',
      customForms: '自訂表格',
      dispense: '配藥',
      history: '歷史',
      incidentCategories: '事件類別',
      inventoryReceived: '收到的庫存',
      inventoryReceivedPlus: '+ 收到的庫存',
      invoices: '清單',
      items: '項目',
      loadDB: '啟動數據庫',
      lookupLists: '查找列表',
      newIncident: '新增事件',
      newInvoice: '新增清單',
      newPatient: '新增患者',
      newRequest: '新增要求',
      newUser: '新增使用者',
      outpatient: '門診病人',
      patientListing: '患者名單',
      priceProfiles: '價格概況',
      prices: '價格',
      printHeader: '列印標題',
      reports: '報告',
      requests: '要求',
      returnMedication: '退還藥物',
      scheduleSurgery: '排定手術',
      textReplacements: '短代碼',
      theaterSchedule: '手術室時間表',
      "today'sAppointments": '本日預約',
      userRoles: '使用者角色(任務)',
      users: '使用者',
      workflow: '工作流程'
    },
    titles: { logoutFailed: '登出失敗' }
  },
  operationReport: {
    labels: {
      additionalNotes: '其他備註',
      assistant: '助理',
      caseComplexity: '案件複雜度',
      operationDescription: '程序描述',
      preOpPrimaryDiagnosis: '程序前主要診斷',
      preOpSecondaryDiagnosis: '程序前次要診斷',
      surgeon: '手術師',
      surgeryDate: '手術日期'
    },
    messages: { reportSaved: '程序報告已成功儲存.' },
    titles: {
      editTitle: '編輯程序報告',
      newTitle: '新增程序報告',
      reportSaved: '報告已儲存'
    }
  },
  operativePlan: {
    buttons: { completePlan: '完成計畫' },
    labels: {
      additionalNotes: '其他備註',
      admissionInstructions: '入院後指導',
      caseComplexity: '案件複雜度',
      completedStatus: '已完成',
      droppedStatus: '被取消',
      operationDescription: '程序描述',
      plannedStatus: '已計劃',
      status: '狀態',
      surgeon: '手術師'
    },
    messages: {
      planCompleted: '程序計畫已完成. 您將被導向程序報告.',
      planSaved: '程序計畫已儲存.'
    },
    titles: {
      editTitle: '編輯程序計畫',
      newTitle: '新增程序計畫',
      planCompleted: '計畫已完成',
      planSaved: '計畫已儲存'
    }
  },
  patients: {
    buttons: {
      addContact: '新增聯絡人',
      addExpense: '新增費用',
      addFamilyMember: '新增家庭成員',
      addOperativePlan: '新增程序計畫',
      backToPatients: '回到患者名單',
      download: '下載',
      editOperativePlan: '現有程序計畫',
      newAppointment: '新增預約',
      newImaging: '新增影像',
      newLab: '新增測試',
      newMedication: '新增藥物',
      newPatient: '+ 新增患者',
      newPhoto: '新增照片',
      newVisit: '新增探訪',
      patientCheckIn: '患者登記',
      scheduleSurgery: '安排手術時間'
    },
    labels: {
      admissionDate: '入院日期',
      admit: '收入患者',
      bloodType: '血型',
      caption: '說明',
      civilStatus: '公民身份',
      clinic: '診所地點',
      contacts: '聯絡人',
      cost: '費用',
      dateOfBirth: '出生年月日',
      dateProcessed: '處理日期',
      dischargeDate: '出院日期',
      dob: '生日',
      education: '學歷',
      email: '電子郵件',
      externalPatientId: '外部患者 Id',
      firstName: '名',
      income: '收入',
      insurance: '保險',
      lastName: '姓',
      middleName: '中間名',
      monthlyCost: '月費',
      occupation: '職業',
      operativePlan: '程序計畫',
      parent: '家長/監護人',
      patientDays: '患者天數',
      patientType: '患者類型',
      patientTypeCharity: '慈善機構',
      patientTypePrivate: '私人',
      phone: '電話',
      placeOfBirth: '出生地點',
      primaryDiagnosis: '主要診斷',
      referredBy: '由...推薦',
      referredDate: '推薦日期',
      relationship: '與患者的關係',
      relationships: '關係',
      religion: '宗教',
      secondaryDiagnosis: '次要診斷',
      sex: '性別',
      sexNotEntered: '性別空白',
      sources: '來源',
      status: '患者狀態',
      totalMontlyExpense: '總共月費'
    },
    messages: {
      areYouSureDelete: '確定要刪除 {{object}}?',
      createNewPatient: '建立新的患者報告?',
      deletingPatient: '正在刪除患者與其所擁有的資料',
      noPatientsFound: '找無患者.',
      notFoundQuickAdd: '找不到患者 <strong>{{patientFullName}}</strong>. 若您想建立新患者, 請填入以下資料. 或選擇取消以返回.',
      photoFileRequired: '儲存照片前請先上傳檔案或拍張照片.',
      savedPatient: '患者的 {{displayName}} 資料已成功儲存.'
    },
    navigation: {
      appointments: '預約',
      general: '取消',
      history: '歷史',
      imaging: '影像',
      labs: '測試',
      medication: '藥物',
      photos: '照片',
      socialWork: '社區工作',
      visits: '探訪'
    },
    notes: {
      newNote: '為...新增備註',
      onBehalfOfCopy: '代表',
      onBehalfOfLabel: '代表',
      pleaseSelectAVisit: '請選擇一個探訪',
      updateNote: '從...更新資料'
    },
    titles: {
      addContact: '新增聯絡人',
      addPhoto: '新增照片',
      additionalContacts: '其他聯絡人',
      admissionsDetail: '入院細節',
      admissionsSummary: '入院概要',
      admittedPatients: '入院患者',
      'delete': '刪除患者',
      deleteContact: '刪除聯絡人',
      deleteExpense: '刪除費用',
      deleteFamilyMember: '刪除家庭成員',
      deletePatientRecord: '刪除患者紀錄',
      deletePhoto: '刪除照片',
      diagnosticTesting: '診斷測試',
      dischargesDetail: '出院細節',
      dischargesSummary: '出院概要',
      edit: '編輯患者',
      editPhoto: '編輯照片',
      expenses: '費用',
      familyInfo: '家庭資料',
      familyInformation: '家庭資料',
      'new': '新增患者',
      outpatientsForDate: '{{visitDate}} 的門診病人',
      patient: '患者報告',
      patientListing: '患者名單',
      patientReport: '患者報告',
      patientStatus: '患者狀態',
      proceduresDetail: '程序細節',
      proceduresSummary: '程序概要',
      savedPatient: '患者已儲存',
      socialWork: '費用',
      todaysOutpatients: '本日門診病人',
      totalPatientDays: '總和患者天數',
      totalPatientDaysDetailed: '總和患者天數(細節)',
      visit: '探訪'
    }
  },
  pricing: {
    labels: {
      discountAmount: '折扣金額',
      discountPercentage: '折扣百分比',
      setFee: '設定費用'
    },
    navigation: {
      allPricingItems: '',
      imagePricing: '',
      labPricing: '',
      pricingProfiles: '',
      procedurePricing: '',
      wardPricing: ''
    },
    sectionTitle: ''
  },
  print: { invoice: {
    labels: {
      billedBy: '由...收費:',
      billedDate: '收費日期:',
      dateAdmitted: '入院:',
      dateDischarged: '出院:',
      dischargeNotes: '出院備註:',
      patientAddress: '地址:',
      patientAge: '年齡:',
      patientId: '患者 #:',
      patientName: '患者姓名:',
      remarks: '備註:',
      spacer: '__________________________________________'
    },
    messages: { whereConducted: '接產中扣了...' },
    titles: {
      billingStatement: '帳單',
      patientMember: '患者成員',
      patients: '患者',
      relContact: '關係/聯絡電話'
    }
  } },
  procedures: {
    buttons: { addMedication: '新增藥物' },
    labels: { medicationUsed: '使用之藥物' },
    messages: { saved: '程序紀錄已儲存.' },
    titles: {
      addChargeItem: '新增收費項目',
      addMedicationUsed: '新增使用藥物',
      deleteChargeItem: '刪除收費項目',
      deleteMedicationUsed: '新增使用藥物',
      edit: '編輯程序',
      editChargeItem: '編輯收費項目',
      editMedicationUsed: '編輯使用藥物',
      medicationUsed: '使用藥物',
      'new': '新增程序',
      saved: '程序已儲存'
    }
  },
  reports: {
    labels: {
      admissionDate: '入院日期',
      allProcedures: '已完成所有程序',
      completedBy: '由...完成',
      dischargeDate: '出院日期',
      examiner: '審查者',
      images: '照片',
      labs: '測試',
      location: '探訪地點',
      medications: '藥物',
      nextAppointment: '下個預約',
      nextAppointments: '下個預約',
      notes: {
        author: '作者',
        date: '日期',
        title: '備註'
      },
      operativePlan: {
        description: '程序描述',
        instructions: '入院後指導',
        procedures: '已計劃程序',
        title: '程序計畫'
      },
      primaryDiagnosis: '主要診斷',
      procedures: '程序',
      secondaryDiagnosis: '次要診斷',
      visitDate: '探訪日期',
      visitType: '探訪類別'
    },
    messages: {
      'delete': '確定要刪除此報告?',
      saved: '報告已成功儲存.'
    },
    titles: {
      dischargeReport: '出院報告',
      newDischargeReport: '新增出院報告',
      newOPDReport: '新增OPD報告',
      opdReport: 'OPD報告',
      saved: '報告已儲存'
    }
  },
  user: {
    plusNewUser: '+ 新增使用者',
    usersPageTile: '使用者名單'
  },
  visits: {
    buttons: {
      addDiagnosis: '新增診斷',
      checkIn: '報到',
      checkOut: '退房',
      discharge: '出院',
      newAppointment: '新增預約',
      newDischargeReport: '新增出院報告',
      newOPDReport: '新增OPD報告',
      newProcedure: '新增程序',
      newVitals: '新增命脈資料'
    },
    labels: {
      appointment: '預約',
      authoredBy: '由...創作',
      checkInTime: '報到',
      checkOutTime: '退房',
      createNewPatient: '建立新患者',
      diagnosis: '診斷',
      examiner: '審查者',
      finalDiagnosis: '最後診斷',
      haveAppointment: 'Y',
      haveDoneOrders: 'Y',
      noAppointment: 'N',
      ordersDone: '已完成訂單',
      ordersNotDone: 'N',
      patientToCheckIn: '要報到之患者',
      procedure: '程序',
      procedureDate: '程序日期',
      reasonForVisit: '探訪原因',
      reportType: '報告類型',
      status: '探訪狀態',
      statusAdmitted: '收入醫院',
      statusCheckedIn: '已報到',
      statusCheckedOut: '已離開',
      statusDischarged: '已出院',
      visitDate: '探訪日期',
      visitInformation: '探訪資料',
      visitType: '探訪類型'
    },
    messages: {
      checkOut: '確定要把 {{patientName}} 退房?',
      checkedOut: '{{patientName}} 已被准許離開.',
      discharged: '{{patientName}} 已出院.',
      patientCheckedIn: '{{patientName}} 已報到.',
      patientCreatedAndCheckedIn: '{{patientName}} 已建立並報到.',
      visitAndPatientSaved: '探訪與患者紀錄已儲存.',
      visitSaved: '探訪紀錄已儲存.'
    },
    navigation: {
      charges: '收費',
      notes: '備註',
      orders: '訂購',
      procedures: '程序',
      reports: '報告',
      vitals: '命脈資料'
    },
    titles: {
      additionalDiagnoses: '其他診斷',
      checkOut: '患者離開',
      checkedIn: '患者報到',
      checkedOut: '患者退房',
      discharged: '患者出院',
      editVisit: '編輯探訪',
      newVisit: '新增探訪',
      patientCheckIn: '患者報到',
      visitSaved: '探訪已儲存'
    }
  },
  vitals: { labels: {
    dateRecorded: '紀錄之日期',
    dbp: '出生年月日',
    heartRate: '心率',
    height: '身高',
    respiratoryRate: '呼吸頻率',
    sbp: 'SBP',
    temperature: '體溫',
    weight: '體重'
  } }
};