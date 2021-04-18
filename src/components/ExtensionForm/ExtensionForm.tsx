import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tag from 'antd/lib/tag';
import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import {identityService} from 'src/services/identity-service';
import {browserService} from 'src/services/browser-service';
import {licenseService} from 'src/services/license-service';
import './ExtensionForm.scss';

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 8},
};

const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

/**
 * File: ExtensionForm.tsx
 * @created 2021-03-13 22:00:24
 * @author Thanh Tùng <ht@thanhtunguet.info>
 * @type {FC<PropsWithChildren<ExtensionFormProps>>}
 */
const ExtensionForm: FC<
  PropsWithChildren<ExtensionFormProps>
> = (): ReactElement => {
  const [userInfo, setUserInfo] = React.useState<chrome.identity.UserInfo>();

  const [fingerprint, setFingerprint] = React.useState<string>();

  const [licenseStatus, setLicenseStatus] = React.useState<boolean>();

  React.useEffect(() => {
    identityService.getUserInfo().then((userInfo: chrome.identity.UserInfo) => {
      setUserInfo(userInfo);
    });
    browserService.getFingerprint().then((fingerprint: string) => {
      setFingerprint(fingerprint);
    });
    licenseService
      .checkLicenseStatus()
      .then(() => {
        setLicenseStatus(true);
      })
      .catch(() => {
        setLicenseStatus(false);
      });
  }, []);

  return (
    <Card title="English Extension">
      <Form {...layout}>
        <Form.Item label="User ID">
          <Input disabled value={userInfo?.id} />
        </Form.Item>
        <Form.Item label="Email">
          <Input disabled value={userInfo?.email} />
        </Form.Item>
        <Form.Item label="Browser ID">
          <Input disabled value={fingerprint} />
        </Form.Item>
        <Form.Item label="License status">
          <Tag color={licenseStatus ? 'green' : 'red'}>
            {licenseStatus ? 'Valid' : 'Invalid'}
          </Tag>
        </Form.Item>
        {!licenseStatus && (
          <Form.Item {...tailLayout}>
            <a
              role="button"
              className="ant-btn ant-btn-primary"
              href={`mailto:thanhtung.uet@gmail.com?subject=English%20Extension%20license%20request&body=Email%3A%20${
                userInfo?.email ?? ''
              }%0D%0AUser%20ID%3A%20${
                userInfo?.id ?? ''
              }%0D%0ABrowser%20ID%3A%20${
                fingerprint ?? ''
              }%0D%0A%0D%0A%3CAttach%20your%20payment%20screenshot%20here%3E%0D%0A`}>
              Request license
            </a>
          </Form.Item>
        )}
      </Form>
    </Card>
  );
};

export interface ExtensionFormProps {
  //
}

ExtensionForm.defaultProps = {
  //
};

ExtensionForm.propTypes = {
  //
};

ExtensionForm.displayName = nameof(ExtensionForm);

export default ExtensionForm;
