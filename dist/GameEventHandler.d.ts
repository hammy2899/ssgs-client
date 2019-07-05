import DeviceType from './enums/DeviceType';
import HeadsetZone from './enums/HeadsetZone';
import IndicatorZone from './enums/IndicatorZone';
import KeyboardZone from './enums/KeyboardZone';
import MouseZone from './enums/MouseZone';
import RgbPerKeyZone from './enums/RgbPerKeyZone';
import RgbZone from './enums/RgbZone';
import Color from './Color';
import VisualizationMode from './enums/VisualizationMode';
import GradientColor from './GradientColor';
import FlashEffectFrequency from './FlashEffectFrequency';
import ColorRanges from './ColorRanges';
export default class GameEventHandler {
    private readonly deviceType;
    private readonly zone;
    private readonly color;
    private customZoneKeys;
    private mode;
    private rate;
    constructor(deviceType?: DeviceType, zone?: HeadsetZone | IndicatorZone | KeyboardZone | MouseZone | RgbPerKeyZone | RgbZone, color?: Color | GradientColor | ColorRanges);
    getDevice(): DeviceType;
    getZone(): HeadsetZone | IndicatorZone | KeyboardZone | MouseZone | RgbPerKeyZone | RgbZone;
    getColor(): Color | GradientColor | ColorRanges;
    setCustomZoneKeys(value: RgbPerKeyZone[]): void;
    addCustomZoneKey(value: RgbPerKeyZone): void;
    getCustomZoneKeys(): RgbPerKeyZone[] | null;
    setMode(value: VisualizationMode): void;
    getMode(): VisualizationMode;
    setRate(value: FlashEffectFrequency): void;
    getRate(): FlashEffectFrequency | null;
}
