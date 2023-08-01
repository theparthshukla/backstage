/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DependencyGraphTypes } from '@backstage/core-components';
import { BackstageTheme } from '@backstage/theme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { EntityEdgeData } from './types';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(
  (theme: BackstageTheme) => ({
    text: {
      fill: theme.palette.textContrast,
    },
    secondary: {
      fill: theme.palette.textSubtle,
    },
  }),
  { name: 'PluginCatalogGraphCustomLabel' },
);

export function CustomLabel({
  edge: { relations, metadata, from, to },
}: DependencyGraphTypes.RenderLabelProps<EntityEdgeData>) {
  const classes = useStyles();
  let found = false;
  for (const key in relations) {
    if (
      typeof relations[key] === 'string' &&
      (relations[key].includes('Data') || relations[key].includes('data'))
    ) {
      found = true;
      break;
    }
  }

  if (found) {
    const fromAfterSlash = from.split('/').pop() || from;
    const toAfterSlash = to.split('/').pop() || to;

    let metadataMatchFrom;
    let metadataMatchTo;
    if (Array.isArray(metadata)) {
      metadataMatchFrom = metadata.find(item => item.includes(fromAfterSlash));
      metadataMatchTo = metadata.find(item => item.includes(toAfterSlash));
    }

    let tooltipText = '';
    if (metadataMatchFrom) {
      const index = metadataMatchFrom.indexOf(fromAfterSlash);
      tooltipText = metadataMatchFrom.substring(
        index + fromAfterSlash.length + 1,
      );
    } else if (metadataMatchTo) {
      const index = metadataMatchTo.indexOf(toAfterSlash);
      tooltipText = metadataMatchTo.substring(index + toAfterSlash.length + 1);
    }
    return (
      <Tooltip title={tooltipText || ''}>
        <text className={classes.text} textAnchor="middle">
          {relations.map((relation, index) => (
            <tspan
              key={relation}
              className={classNames(index > 0 && classes.secondary)}
            >
              {index > 0 && <tspan> / </tspan>}
              {relation}
            </tspan>
          ))}
        </text>
      </Tooltip>
    );
  }

  return (
    <text className={classes.secondary} textAnchor="middle">
      {relations.map((relation, index) => (
        <tspan
          key={relation}
          className={classNames(index > 0 && classes.secondary)}
        >
          {index > 0 && <tspan> / </tspan>}
          {relation}
        </tspan>
      ))}
    </text>
  );
}
