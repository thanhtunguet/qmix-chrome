import type {FC, PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import {identityService} from 'src/services/identity-service';
import {browserService} from 'src/services/browser-service';
import {licenseService} from 'src/services/license-service';
import './ExtensionForm.scss';
import moment from 'moment';
import type {License} from '@english-extension/models';
import nameof from 'ts-nameof.macro';
import {Card, Form, Input, Spin, Tag} from 'antd';
import manifest from 'manifest.json';

const {name, homepage_url} = manifest;

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
const ExtensionForm: FC<PropsWithChildren<ExtensionFormProps>> =
  (): ReactElement => {
    const [userInfo, setUserInfo] = React.useState<chrome.identity.UserInfo>();

    const [fingerprint, setFingerprint] = React.useState<string>();

    const [licenseStatus, setLicenseStatus] = React.useState<boolean>();

    const [loading, setLoading] = React.useState<boolean>(true);

    const [license, setLicense] = React.useState<License>(null);

    React.useEffect(() => {
      identityService
        .getUserInfo()
        .then((userInfo: chrome.identity.UserInfo) => {
          setUserInfo(userInfo);
        });
      browserService.getFingerprint().then((fingerprint: string) => {
        setFingerprint(fingerprint);
      });
      licenseService
        .getLicenseStatus()
        .then(async (isValidLicense: boolean) => {
          setLicenseStatus(isValidLicense);
          const license: License = await licenseService.getLicense();
          setLicense(license);
        })
        .catch(() => {
          setLicenseStatus(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return (
      <Spin spinning={loading} tip="Đang lấy thông tin license">
        <Card
          title={
            <>
              <a href={homepage_url} target="_blank">
                {name}
              </a>
            </>
          }>
          <Form {...layout}>
            {userInfo ? (
              <>
                <Form.Item label="ID">
                  <Input disabled value={userInfo?.id} />
                </Form.Item>
                <Form.Item label="Địa chỉ email">
                  <Input disabled value={userInfo?.email} />
                </Form.Item>
              </>
            ) : (
              <div className="text-center">
                Vui lòng đăng nhập bằng tài khoản Google đã được đăng ký license
                để có thể sử dụng phần mềm
              </div>
            )}
            <Form.Item label="ID trình duyệt">
              <Input disabled value={fingerprint} />
            </Form.Item>
            <Form.Item label="Trạng thái license">
              <Tag color={licenseStatus ? 'green' : 'red'}>
                {licenseStatus ? 'Hợp lệ' : 'Không hợp lệ'}
              </Tag>
            </Form.Item>
            {license?.expiredAt && (
              <Form.Item label="Ngày hết hạn">
                <Tag color={licenseStatus ? 'green' : 'red'}>
                  {moment(license?.expiredAt).format('DD/MM/YYYY')}
                </Tag>
              </Form.Item>
            )}
            {!licenseStatus && (
              <>
                <Form.Item {...tailLayout}>
                  <a
                    role="button"
                    className="ant-btn ant-btn-primary"
                    href={`mailto:tienganh.qmix@gmail.com?subject=English%20Extension%20license%20request&body=Email%3A%20${
                      userInfo?.email ?? ''
                    }%0D%0AUser%20ID%3A%20${
                      userInfo?.id ?? ''
                    }%0D%0ABrowser%20ID%3A%20${
                      fingerprint ?? ''
                    }%0D%0A%0D%0A%3CAttach%20your%20payment%20screenshot%20here%3E%0D%0A`}>
                    Gửi mail yêu cầu
                  </a>
                </Form.Item>
              </>
            )}
            <div className="text-center font-italic">
              Để sử dụng phần mềm, quý thầy cô vui lòng copy 3 dòng mã trên và
              gửi về địa chỉ email
              <a href="mailto:<tienganh.qmix@gmail.com>">
                {' tienganh.qmix@gmail.com'}
              </a>
              .
            </div>
          </Form>
        </Card>
      </Spin>
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
