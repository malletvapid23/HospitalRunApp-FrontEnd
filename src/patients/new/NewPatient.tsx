import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import GeneralInformation from '../GeneralInformation'
import useTitle from '../../page-header/useTitle'
import Patient from '../../model/Patient'
import { createPatient } from '../patient-slice'
import { getPatientName } from '../util/patient-name-util'

const NewPatient = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()

  const [patient, setPatient] = useState({} as Patient)
  const [errorMessage, setErrorMessage] = useState('')

  useTitle(t('patients.newPatient'))

  const onCancel = () => {
    history.push('/patients')
  }

  const onSave = () => {
    if (!patient.givenName) {
      setErrorMessage(t('patient.errors.patientGivenNameRequired'))
    } else {
      dispatch(
        createPatient(
          {
            ...patient,
            fullName: getPatientName(patient.givenName, patient.familyName, patient.suffix),
          },
          history,
        ),
      )
    }
  }

  const onFieldChange = (key: string, value: string | boolean) => {
    setPatient({
      ...patient,
      [key]: value,
    })
  }

  return (
    <GeneralInformation
      isEditable
      onCancel={onCancel}
      onSave={onSave}
      patient={patient}
      onFieldChange={onFieldChange}
      errorMessage={errorMessage}
    />
  )
}

export default NewPatient
