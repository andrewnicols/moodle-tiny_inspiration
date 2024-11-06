// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny inspiration commands
 *
 * @module     tiny_inspiration/commands
 * @copyright  2024 Andrew Lyons <andrew@nicols.co.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
import {component, buttonName} from 'tiny_inspiration/common';

export const getSetupCommands = async () => {
    // Fetch the translated strings, and the rendered image in SVG format.
    const [
        buttonText,
        buttonImage,
    ] = await Promise.all([
        getString('buttontitle', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
        // Register the Icon.
        editor.ui.registry.addIcon(buttonName, buttonImage.html);

        // Register the menu item.
        editor.ui.registry.addMenuItem(buttonName, {
            icon: buttonName,
            text: buttonText,
            onAction: () => {
                window.console.log('Menu item clicked');
            },
        });
    };
};
