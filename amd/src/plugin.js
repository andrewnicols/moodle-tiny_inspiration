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
 * Tiny Inspirational Quotes plugin.
 *
 * @module     tiny_inspiration/plugin
 * @copyright  Andrew Lyons <andrew@nicols.co.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {pluginName} from './common';
import * as Configuration from './configuration';
import {getSetupCommands} from './commands';
import {registerOptions} from './options';


export default new Promise((resolve) => {
    // Initialise the plugin.
    Promise.all([
        getTinyMCE(),
        getSetupCommands(),
    ]).then(([tinyMCE, setupCommands]) => {
        // This is where we define icons, buttons, menu items, and so on.
        tinyMCE.PluginManager.add(pluginName, (editor) => {
            // Note: The contents of this method must be synchronous and not return any Promise.
            registerOptions(editor);
            setupCommands(editor);

            return;
        });

        // Resolve the Plugin and include configuration.
        resolve([pluginName, Configuration]);
    });
});
