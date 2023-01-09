export interface TermOption {
    id: number;
    name: string;
    unavailable: boolean;
}

export type Icon = 'calendar' | 'package'

export type DiscountType = 'dollar' | 'percentage'

export interface FormValues { [key: string]: any };