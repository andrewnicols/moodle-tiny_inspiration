<?php
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

namespace tiny_inspiration;

use editor_tiny\plugin;
use editor_tiny\plugin_with_configuration;

/**
 * Tiny inspirational quotes plugin.
 *
 * @package    tiny_inspiration
 * @copyright  Andrew Lyons <andrew@nicols.co.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class plugininfo extends plugin implements
   plugin_with_configuration
{
    #[\Override]
    public static function is_enabled(
        \context $context,
        array $options,
        array $fpoptions,
        ?\editor_tiny\editor $editor = null
    ): bool {
        // Users must have permission to generate inspiration.
        return has_capability('tiny/inspiration:inspire', $context);
    }

    #[\Override]
    public static function get_plugin_configuration_for_context(
        \context $context,
        array $options,
        array $fpoptions,
        ?\editor_tiny\editor $editor = null
    ): array {
        $config = get_config('tiny_inspiration');

        return [
            'fetchcount' => $config->fetchcount,
        ];
    }
}
