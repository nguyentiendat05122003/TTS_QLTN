import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbConfig = [
    { path: '/SoLuongChuKy', name: 'Báo cáo số lần ký thành công theo Đơn vị thực hiện', type: 'Báo cáo' },
    { path: '/YeuCauThiNghiem', name: 'Danh sách Yêu cầu thí nghiệm', type: 'Quản lý Yêu cầu thí nghiệm' },
    { path: '/Add', name: 'Tao mới yêu cầu', type: 'Quản lý Yêu cầu thí nghiệm' },
];

const Breadcrumb = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const breadcrumbs = breadcrumbConfig.filter((item) => currentPath.startsWith(item.path)).reverse();

    return (
        <div className="breadcrumb text-sm w-full sm:w-auto text-right sm:hidden lg:block">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={breadcrumb.path}>
              {index > 0 && ' / '}
              {breadcrumb.type ? `${breadcrumb.type}/ ` : ''}
              {index < breadcrumbs.length - 1 ? (
                <Link to={breadcrumb.path}>
                  {breadcrumb.name}
                </Link>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
            </span>
          ))}
        </div>
      );
};

export default Breadcrumb;
