
export enum ButtonType {
    Primary = "primary",
    Secondary = "secondary",
    Outlined = "outlined"
}
export enum MessageType {
    Info = "info",
    Error = "error",
    Success = "success"
}

export interface MsgProps {
    type: "info" | "error" | "success";
    msg: string;
}
export interface ButtonProps {
    type: "primary" | "secondary" | "outlined";
    text: string;
    onClick: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onConfirm: any;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export interface Mapprops {
    active: string;
    name: string;
    mapSelectorHandler: (id: string) => void;
}


export interface TicketLocation {
    x: number;
    y: number;
}

export interface SeatRowProps {
    rowNumber: number;
    rowData: (0 | 1)[];
    modalOpenHandler: (location: TicketLocation) => void;
}

export interface SeatsWrapperProps {
    seatsData: (0 | 1)[][];
    modalOpenHandler: (location: TicketLocation) => void;
}

export interface SeatProps {
    location: TicketLocation;
    modalOpenHandler: (location: TicketLocation) => void;
    value: 0 | 1;
}
