
export const showSuccessToast = (toastRef, detail, summary = 'Thông báo', life = 3400) => {

    toastRef.current?.show({ severity: 'success', summary, detail, life });

};


export const showWarningToast = (toastRef, detail, summary = 'Thông báo', life = 3400) => {

    toastRef.current?.show({ severity: 'warn', summary, detail, life });

};

export const showErrorToast = (toastRef, detail, summary = 'Thông báo', life = 3400) => {

    toastRef.current?.show({ severity: 'error', summary, detail, life });

};
