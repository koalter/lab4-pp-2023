export class ToastInfo {
    mensaje!: string;
    tipo?: ToastTipo = ToastTipo.info;
}

export enum ToastTipo {
    info,
    success,
    warning,
    error
}