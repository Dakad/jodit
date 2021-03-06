/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * License https://xdsoft.net/jodit/license.html
 * Copyright 2013-2018 Valeriy Chupurnov https://xdsoft.net
 */
import { Jodit } from '../Jodit';
declare module "../Config" {
    interface Config {
        indentMargin: number;
    }
}
/**
 * Indents the line containing the selection or insertion point.
 * @param {Jodit} editor
 */
export declare function indent(editor: Jodit): void;
