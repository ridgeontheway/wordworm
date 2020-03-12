import S3Access from '../dataAccess/S3Access'

class DataObjectRepository {
  private _dataAccess: S3Access
  private _downloadedCache

  constructor() {
    this._dataAccess = new S3Access()
  }

  create(req, res, callback: (error: any) => void) {
    this._dataAccess.uploadObject(req, res, callback)
  }

  retrieve(_fileName: string, _downloadPath: string): Promise<unknown> {
    return this._dataAccess.getObject(_fileName, _downloadPath)
  }
}

Object.seal(DataObjectRepository)
export = DataObjectRepository
