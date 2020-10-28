// This file is part of React-Invenio-Deposit
// Copyright (C) 2020 CERN.
// Copyright (C) 2020 Northwestern University.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FieldLabel, RichInputField } from 'react-invenio-forms';
import { AdditionalDescriptionsField } from './AdditionalDescriptionsField';

export class DescriptionsField extends Component {
  render() {
    const { fieldPath, label, labelIcon, options } = this.props;

    return (
      <>
        <RichInputField
          fieldPath={fieldPath}
          label={
            <FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />
          }
          optimized
          required
        />
        <AdditionalDescriptionsField options={options} />
      </>
    );
  }
}

DescriptionsField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelIcon: PropTypes.string,
};

DescriptionsField.defaultProps = {
  fieldPath: 'metadata.description',
  label: 'Description',
};
